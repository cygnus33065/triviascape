const express = require('express');
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const decksRouter = require('./decks')
const categoriesRouter = require('./categories')
const questionsRouter = require('./questions')

const router = express.Router();

router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/decks', decksRouter)
router.use('/categories', categoriesRouter)
router.use('/questions', questionsRouter)



module.exports = router;
