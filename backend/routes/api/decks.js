const express = require('express');
const asyncHandler = require('express-async-handler')
const {check} = require('express-validator');
const { handleValidationErrors} = require('../../utils/validation');

const {Deck, Question} = require ('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async (req,res) => {
  const {name, userId, categoryId} = req.body;
  const deck = await Deck.create({name, userId, categoryId})

  return res.json(deck)
}))

router.get('/', asyncHandler(async (req,res) => {
  const decks = await Deck.findAll()

  return res.json(decks);
}))

router.get('/:deckId', asyncHandler(async (req,res) => {
  const deck = await Deck.findByPk(req.params.deckId)

  return res.json(deck)
}))

router.get('/userdecks/:userId', asyncHandler(async (req, res) => {
  const decks = await Deck.findAll({
    where: {
      userId: req.params.userId
    }
  })

  return await res.json(decks);
}))

router.delete('/:deckId', asyncHandler(async (req,res) => {
  const deck = await Deck.findByPk(req.params.deckId)
  await Question.destroy({
    where: {deckId: req.params.deckId}
  })
  deck.destroy();
  return res.json(deck)
}))

module.exports = router;
