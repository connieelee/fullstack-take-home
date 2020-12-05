const express = require('express');
const Course = require('../db/models/course');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.send(await Course.findAll());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
