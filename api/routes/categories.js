const express = require('express');
let categories = require('../data/categories');

const router = express.Router();

// List categories
router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 25;
  const offset = parseInt(req.query.offset, 10) || 0;

  res.status(200).send({
    categories: categories.slice(offset, offset + limit),
    total: categories.length,
  });
});

// Add category
router.post('/', (req, res) => {
  const { category } = req.body;

  if (category) {
    if (categories.indexOf(category) < 0) {
      categories.push(category);
      res.status(201).send(categories);
    } else {
      res.status(409).send('Category already exists');
    }
  } else {
    res.status(200).send(categories);
  }
});

// Delete category
router.delete('/', (req, res) => {
  const { category } = req.body;

  if (category) {
    if (categories.indexOf(category) >= 0) {
      categories = categories.filter(cat => cat !== category);
      res.status(200).send(categories);
    } else {
      res.status(404).send('Category not found');
    }
  } else {
    res.status(200).send(categories);
  }
});

module.exports = router;
