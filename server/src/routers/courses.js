const express = require('express');
const { Course, Session, Section } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const courses = await Course.findAll();
    res.send(courses);
  } catch (err) {
    next(err);
  }
});

router.get('/:courseId', async (req, res, next) => {
  const { courseId } = req.params;
  try {
    const course = await Course.findByPk(courseId, {
      include: [Session, Section],
      order: [
        [Session, 'session_number', 'asc'],
        [Section, 'start_date', 'desc'],
      ],
    });
    res.send(course);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
