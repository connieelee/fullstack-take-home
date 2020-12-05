const { DataTypes } = require('sequelize');
const db = require('../_db');

const Section = db.define('section', {
  name: {
    type: DataTypes.STRING,
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = Section;
