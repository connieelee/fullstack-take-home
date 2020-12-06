const { DataTypes } = require('sequelize');
const moment = require('moment');
const db = require('../_db');

const Section = db.define('section', {
  name: {
    type: DataTypes.STRING,
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.VIRTUAL,
    get() {
      const startDate = moment(this.startDate);
      return startDate.add(4, 'w').format('YYYY-MM-DD');
    },
  },
  displayDates: {
    type: DataTypes.VIRTUAL,
    get() {
      const FORMAT = 'll';
      return {
        startDate: moment(this.startDate).format(FORMAT),
        endDate: moment(this.endDate).format(FORMAT),
      };
    },
  },
  status: {
    type: DataTypes.VIRTUAL,
    get() {
      const now = moment();
      const startDate = moment(this.startDate);
      const endDate = moment(this.endDate);
      if (startDate > now) return 'Open';
      if (endDate > now) return 'In progress';
      return 'Ended';
    },
  },
});

module.exports = Section;
