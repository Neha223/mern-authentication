const mongoose = require('mongoose');
const config = require('./index');

const URI = config.mongoURI;
mongoose.connect(URI);

// When successfully connected
mongoose.connection.on('connected', () => {
	console.log('MongoDB Connect Successfully!');
});

// When connection throws an error
mongoose.connection.on('error', err => {
	console.log('MongoDB  throws an error : ' + err);
});