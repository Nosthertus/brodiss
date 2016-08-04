var moment = require("moment");

module.exports = function(io){
	io.on('connection', function(socket){
		console.log(moment().format("HH:mm:ss") + ' new socket connected');

		var user = {
			name: socket.handshake.query.username
		};

		io.emit("connection.start", {
			username: user.name,
			time: moment().format("HH:mm:ss")
		});

		socket.on('message:new', function(data){
			io.emit('message:new', {
				username: user.name,
				message: data,
				time: moment().format("HH:mm:ss")
			});
		});
	});

};