const Router = require('express')
const router = new Router();
const notesController = require('../controllers/notesController')

router.post('/create', notesController.createNote)
router.put('/update', notesController.updateNote)
router.delete('/delete', notesController.deleteNote)
router.get('/note/:id', notesController.getOne)
router.get('/notes', notesController.getAll)

module.exports = router;