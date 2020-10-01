const express = require('express');
const config = require('./server/config');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();

// DB connection
require('./server/config/dbConnection');
const userRoutes = require('./server/routes/user');

const app = express();

// middleware functions
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).json({ error: err.name + ':' + err.message });
	}
});

app.listen(config.port, () => {
	console.log(`Server connected at port ${config.port}`);
});