const {Notes} = require('../models/models')
const ApiError = require('../error/ApiError')
class NotesController {
    async createNote(req, res){
        const {title, description, userID} = req.body;
        const note = await Notes.create({title, description, userID})
        return res.json(note);
    }
    async updateNote(req, res){
        const {title, description} = req.body;
        const {id} = req.query;
        const note = await Notes.update({title: title, description: description}, {where: {id: id}})
        return res.json(note);
    }
    async deleteNote(req, res){
        const {id} = req.query;
        const note = await Notes.destroy({where: {id: id, userID: req.query.userID}})
        return res.json(note);
    }
    async getAll(req, res){
        const note = await Notes.findAll({where: {userID: req.query.userID}})
        return res.json(note);
    }
    async getOne(req, res){
        const id = req.params.id;
        const note = await Notes.findOne({where: {id: id, userID: req.query.userID}})
        return res.json(note);
    }
}

module.exports = new NotesController();