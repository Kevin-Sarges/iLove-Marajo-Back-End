require('dotenv').config();

const express = require('express');
const cors = require('cors');

const routesMunicipios = require('./routes/routesMunicipios');
const routesPraias = require('./routes/routesPraias')
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routesMunicipios);
app.use(routesPraias);

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
