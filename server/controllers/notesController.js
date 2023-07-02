const {Notes} = require('../models/models')
const ApiError = require('../error/ApiError')
class NotesController {
    async createNote(req, res, next){
        const {title, description, userId} = req.body;
        if (!userId) {
            return next(ApiError.badRequest('id пользователя нет'))
        }
        const note = await Notes.create({title, description, userId})
        return res.json(note);
    }
    async updateNote(req, res, next){
        const {title, description} = req.body;
        const {id, userId} = req.query;
        if (!userId) {
            return next(ApiError.badRequest('id пользователя нет'))
        }
        const note = await Notes.update({title: title, description: description}, {where: {id: id, userId: userId}})
        return res.json(note);
    }
    async deleteNote(req, res, next){
        const {id, userId} = req.query;
        if (!userId) {
            return next(ApiError.badRequest('id пользователя нет'))
        }
        const note = await Notes.destroy({where: {id: id, userID: userId}})
        return res.json(note);
    }
    async getAll(req, res, next){
        const {userId} = req.query;
        if (!userId) {
            return next(ApiError.badRequest('id пользователя нет'))
        }
        const note = await Notes.findAll({where: {userId: userId}})
        return res.json(note);
    }
    async getOne(req, res, next){
        const id = req.params.id;
        const {userId} = req.query;
        if (!userId) {
            return next(ApiError.badRequest('id пользователя нет'))
        }
        const note = await Notes.findOne({where: {id: id, userId: userId}})
        return res.json(note);
    }
}

module.exports = new NotesController();