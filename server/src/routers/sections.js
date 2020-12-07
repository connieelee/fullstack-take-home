const express = require('express');
const NotFoundError = require('../utils/not-found-error');
const { Section, User } = require('../db/models');

const router = express.Router();

router.post('/:sectionId/users', async (req, res, next) => {
  const { sectionId } = req.params;
  const { name, email } = req.body;
  try {
    const section = await Section.findByPk(sectionId, {
      include: [User],
    });

    if (!section) throw new NotFoundError();
    if (section.users.length > 9) {
      const error = new Error('Section is full.');
      error.status = 400;
      throw error;
    }

    const [user] = await User.findOrCreate({
      where: { name, email },
    });
    await section.addUser(user);
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
});

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
