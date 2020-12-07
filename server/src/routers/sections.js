const express = require('express');
const NotFoundError = require('../utils/not-found-error');
const { Section } = require('../db/models');

const router = express.Router();

router.delete('/:sectionId/users', async (req, res, next) => {
  const { sectionId } = req.params;
  const { userId } = req.body;
  try {
    const section = await Section.findByPk(sectionId);
    if (!section) throw new NotFoundError();
    await section.removeUser(userId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
