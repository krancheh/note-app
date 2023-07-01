const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Notes} = require('../models/models')

const generateJwt = (id, username, password) => {
    return jwt.sign({id, username}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next){
        const {username, password} = req.body;
        if (!username || !password){
            next(ApiError.badRequest('Некорректный логин или пароль'))
        }
        const candidate = await User.findOne({where: {username}})
        if (candidate){
            next(ApiError.badRequest('Пользователь с таким логином уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({username, password: hashPassword})
        const note = Notes.create({userID: user.id})
        const token = generateJwt(user.id, user.username);

        res.json({token})
    }
    async login(req, res, next){
        const {username, password} = req.body
        const user = await User.findOne({where: {username}})
        if (!user){
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiError.internal('Пароли не совпадают'))
        }
        const token = generateJwt(user.id, user.username)
        return res.json(token)
    }
    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.username)
        return res.json({token})
    }
}

module.exports = new UserController();