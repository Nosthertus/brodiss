module.exports = function(io){
	io.on('connection', function(socket){
		console.log('new socket connected');

		var user = {
			name: socket.handshake.query.username
		};

		socket.on('message:new', function(data){
			io.emit('message:new', {
				username: user.name,
				message: data
			});
		});
	});

};