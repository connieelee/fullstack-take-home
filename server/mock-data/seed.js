const db = require('../src/db');
const courses = require('./courses.json');
const sections = require('./course-sections.json');
const sessions = require('./course-sessions.json');
const users = require('./users.json');
const sectionUsers = require('./section-users.json');

const data = {
  course: courses,
  section: sections,
  session: sessions,
  user: users,
  sectionUser: sectionUsers,
};

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(Object.keys(data).map((modelName) => (
      Promise.all(data[modelName].map((item) => (
        db.models[modelName].create(item)
      )))
    )));
    console.log('Success!');
  } catch (err) {
    console.error('An error occurred:', err);
  }
};

seed();
