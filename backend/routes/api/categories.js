const express = require('express');
const asyncHandler = require('express-async-handler');

const {Category, SubCategory} = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req,res) => {
const categories = await Category.findAll();

return res.json({categories})
}))

router.get('/:categoryId', asyncHandler(async (req,res) => {
  const subCategories = await SubCategory.findAll({
    where: {
      categoryId: req.params.categoryId
    }
  })
  return res.json(subCategories)
}))

module.exports = router;
