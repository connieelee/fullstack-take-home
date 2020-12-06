const Course = require('./course');
const Section = require('./section');
const Session = require('./session');
const User = require('./user');
const SectionUser = require('./section-user');

Course.hasMany(Session);
Course.hasMany(Section);
User.belongsToMany(Section, { through: SectionUser });
Section.belongsToMany(User, { through: SectionUser });

module.exports = {
  Course,
  Section,
  Session,
  User,
};
