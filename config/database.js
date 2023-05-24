// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('employee_db', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
