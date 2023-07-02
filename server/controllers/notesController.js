const {Notes} = require('../models/models')
const ApiError = require('../error/ApiError')
class NotesController {
    async createNote(req, res, next){
        const {title, content, userId} = req.body;
        if (!userId) {
            return next(ApiError.badRequest('id пользователя нет'))
        }
        const note = await Notes.create({title, content, userId})
        return res.json(note);
    }
    async updateNote(req, res, next){
        const {title, content} = req.body;
        const {id, userId} = req.query;
        if (!userId) {
            return next(ApiError.badRequest('id пользователя нет'))
        }
        const note = await Notes.update({title: title, content: content}, {where: {id: id, userId: userId}})
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