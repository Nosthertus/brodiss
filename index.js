/**
 * Load all dependecies for application
 */
var server = require('diet'),
	sequelize = require('sequelize'),
	static = require('diet-static-stream'),
	socketio = require('socket.io');

/**
 * Start the web server
 */
var app = server();
app.listen(3000);

/**
 * Start the webSocket server
 */
var io = socketio(app.server);

/**
 * Define static files config and attach to server
 * @type {[type]}
 */
app.footer(static({
	path: "static",
	cache: "no-store"
}));

/**
 * Register all socket events
 */
require('./socket/events')(io);