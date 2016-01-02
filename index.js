var server = require('diet');
var sequelize = require('sequelize');
var app = server();

app.listen('127.0.0.1:3000');

// Set database handler
app.header(function($){
	$.db = new sequelize('test', 'root', '3141', {
		host: '127.0.0.1',
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	});

	$.return();
});

app.get('/', function($){
	$.end('Hello world');
});

// Routes
require('./routes/users')(app);