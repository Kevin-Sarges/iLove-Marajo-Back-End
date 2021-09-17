const { Sequelize } = require('sequelize');
const enviroment = process.env.NODE_ENV || 'development';
const dbConfig = require('../config/config')[enviroment];

const Cidade = require('../models/Cidade');
const Local = require('../models/Local');
const Avaliacao = require('../models/Avaliacao');

const connection = new Sequelize(dbConfig);

Cidade.init(connection);
Local.init(connection);
Avaliacao.init(connection);

Cidade.associate(connection.models);
Local.associate(connection.models);
Avaliacao.associate(connection.models);

module.exports = connection;