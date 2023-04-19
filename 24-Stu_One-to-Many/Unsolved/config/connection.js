const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'library_db',
  'root',
  'chipmunk',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
