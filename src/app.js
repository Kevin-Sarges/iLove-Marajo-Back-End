const express = require('express');
const cors = require('cors');

require('./database/connect');
const routesMunicipios = require('./routes/routesMunicipios');
const routesPraias = require('./routes/routesPraias');
const routesAvaliacao = require('./routes/routesAvaliacao');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routesMunicipios);
app.use(routesPraias);
app.use(routesAvaliacao);

module.exports = app;
