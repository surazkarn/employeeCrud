// models/employee.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Contact = require('./contact');

const Employee = sequelize.define('Employee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Employee.hasMany(Contact, { as: 'contacts', foreignKey: 'EmployeeId' });

module.exports = { Employee, Contact };