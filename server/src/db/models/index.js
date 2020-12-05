const Course = require('./course');
const Section = require('./section');
const Session = require('./session');
const User = require('./user');

Course.hasMany(Session);
Course.hasMany(Section);
User.belongsToMany(Section, { through: 'section_users' });

module.exports = {
  Course,
  Section,
  Session,
  User,
};
