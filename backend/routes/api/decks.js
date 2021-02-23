const express = require('express');
const asyncHandler = require('express-async-handler')
const {check} = require('express-validator');
const { handleValidationErrors} = require('../../utils/validation');

const {Deck} = require ('../../db/models')

const router = express.Router();

router.post('/', asyncHandler(async (req,res) => {
  const {name, userId, categoryId} = req.body;
  const deck = await Deck.create({name, userId, categoryId})

  return res.json({deck})
}))

router.get('/', asyncHandler(async (req,res) => {
  const decks = await Deck.findAll()

  return res.json({decks});
}))


module.exports = router;
