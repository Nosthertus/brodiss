var History = require("./../lib/History");
var moment  = require("moment");

module.exports = function(io){
	var history = new History({
		timeFormat: "YYYY-MM-DD HH:mm:ss"
	});

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
			var msg = {
				username: user.name,
				message: data,
			};

			if(obj = history.addItem(msg)){
				Object.assign(msg, obj);
			}

			else{
				throw new Error("Error on adding item into History");
			}

			io.emit('message:new', msg);
		});
	});

};