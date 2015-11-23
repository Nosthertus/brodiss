module.exports = function(sequelize, dataTypes){
	return sequelize.define('user', {
		// Model Schema
		firstName:{
			type: dataTypes.STRING(50),
			field: 'first_name'
		},
		lastName: {
			type: dataTypes.STRING(50),
			field: 'last_name'
		},
		email: dataTypes.STRING(50),
		country: dataTypes.STRING(50),
		ipAddress:{
			type: dataTypes.STRING(50),
			field: 'ip_address'
		}
	}, {
		freezeTableName: true,
		timestamps: false
	});
};