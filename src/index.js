const express = require('express');
const cors = require('cors');
const app = express();

const routesMunicipios = require('./routes/routesMunicipios');
const routesPraias = require('./routes/routesPraias')
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routesMunicipios);
app.use(routesPraias);

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});