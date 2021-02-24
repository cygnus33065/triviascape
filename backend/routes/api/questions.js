const express = require('express');
const asyncHandler = require('express-async-handler');

const {Deck, Question} = require('../../db/models');

const router = express.Router()

router.post('/', asyncHandler(async (req,res) => {
  const {question, answer, deckId} = req.body;
  const newQuestion = await Question.create({question, answer, deckId})

  return res.json(newQuestion);
}))

router.get('/:deckId', asyncHandler(async (req, res) => {
  const questions = await Question.findAll({
    where: {deckId: req.params.deckId}
  })
  return res.json(questions)
}))

module.exports = router;
