module.exports = function(io){
	io.on('connection', function(socket){
		console.log('new socket connected');

		socket.on('message:new', function(data){
			io.emit('message:new', {
				username: socket.handshake.address,
				message: data
			});
		});
	});

};