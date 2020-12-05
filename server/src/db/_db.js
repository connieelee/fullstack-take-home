const { Sequelize } = require('sequelize');

const db = new Sequelize('course-db', 'admin', 'password', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5560,
  logging: false,
  define: {
    underscored: true,
  },
});

module.exports = db;
