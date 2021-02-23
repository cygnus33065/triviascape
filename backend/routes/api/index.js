const express = require('express');
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const decksRouter = require('./decks')

const router = express.Router();

router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/decks', decksRouter)



module.exports = router;
