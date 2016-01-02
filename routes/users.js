var sequelize = require('sequelize');

module.exports = function(app){
	app.get('/users', function($){
		var user = $.db.import(__dirname + "/../models/User.js");

		user.findAll().then(function(user){
			$.data.users = user;
			$.json();
		});
	});
};