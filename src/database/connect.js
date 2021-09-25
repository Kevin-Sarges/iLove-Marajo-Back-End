import { Sequelize } from 'sequelize';

import { Cidade } from '../models/Cidade';
import { Local } from '../models/Local';
import { Avaliacao } from '../models/Avaliacao';

const enviroment = process.env.NODE_ENV || 'development';
const dbConfig = require('../config/config')[enviroment];

const connection = new Sequelize(dbConfig);

Cidade.init(connection);
Local.init(connection);
Avaliacao.init(connection);

Cidade.associate(connection.models);
Local.associate(connection.models);
Avaliacao.associate(connection.models);

export { connection };