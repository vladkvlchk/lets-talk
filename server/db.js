const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lets-talk', 'postgres', 'root', {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres',
});

module.exports = sequelize;