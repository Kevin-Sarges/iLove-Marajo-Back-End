const { Sequelize } = require('sequelize');
const enviroment = process.env.NODE_ENV || 'development';
const dbConfig = require('../config/config')[enviroment];

const connection = new Sequelize(dbConfig);

module.exports = connection;