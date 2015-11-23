var sequelize = require('sequelize');

module.exports = function(app){
	app.get('/users', function($){
		var user = $.db.define('user', {
			firstName:{
				type: sequelize.STRING(50),
				field: 'first_name'
			},
			lastName: {
				type: sequelize.STRING(50),
				field: 'last_name'
			}
		}, {
			freezeTableName: true,
			timestamps: false
		});

		user.findAll().then(function(user){
			$.data.users = user;
			$.json();
		});
	});
};