const Router = require('express')
const router = new Router();
const userRouter =require('./userRouter')
const notesRouter =require('./notesRouter')

router.use('/user', userRouter)
router.use('/notes', notesRouter)

module.exports = router;