const { DataTypes } = require('sequelize');
const db = require('../_db');

const Course = db.define('course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Course;
