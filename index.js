/**
 * Load all dependecies for application
 */
var server = require('diet'),
	sequelize = require('sequelize'),
	static = require('./bin/diet-static'),
	socketio = require('socket.io');

/**
 * Start the web server
 */
var app = server();
app.listen('127.0.0.1:3000');

/**
 * Start the webSocket server
 */
var io = socketio(app.server);

/**
 * Set database handler
 */
app.header(function($){
	$.db = new sequelize('brodiss', 'root', '3141', {
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

/**
 * Define static files config and attach to server
 * @type {[type]}
 */
var files = static({
	path: app.path + '/static',
	index: false,
	showScriptName: false,
	cache: 'no-store'
});
app.footer(files);

/**
 * Register all socket events
 */
require('./socket/events')(io);