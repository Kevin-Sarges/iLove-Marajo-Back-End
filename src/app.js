const express = require('express');
const cors = require('cors');

require('./database/connect');
const routesCidade = require('./routes/routesCidades');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routesCidade);

module.exports = app;
