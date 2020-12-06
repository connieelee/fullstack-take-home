const express = require('express');
const NotFoundError = require('../utils/not-found-error');
const {
  Course,
  Session,
  Section,
  User,
} = require('../db/models');

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

    if (!course) throw new NotFoundError();

    res.send(course);
  } catch (err) {
    next(err);
  }
});

router.get('/:courseId/sections/:sectionId', async (req, res, next) => {
  const { courseId, sectionId } = req.params;
  try {
    const section = await Section.findOne({
      where: {
        id: sectionId,
        courseId,
      },
      include: [{
        model: User,
      }],
    });

    if (!section) throw new NotFoundError();

    res.send(section);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
