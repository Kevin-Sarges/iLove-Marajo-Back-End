const express = require('express');
const cors = require('cors');

require('./database/connect');
const routesCidade = require('./routes/routesCidades');
const routesLocal = require('./routes/routesLocais');
const routesAvaliacao = require('./routes/routesAvaliacoes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routesCidade);
app.use(routesLocal);
app.use(routesAvaliacao);

module.exports = app;
