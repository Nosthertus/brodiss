var History = require("./../lib/History");
var moment  = require("moment");

module.exports = function(io){
	var history = new History({
		time_format: "YYYY-MM-DD HH:mm:ss"
	});

	io.on('connection', function(socket){
		console.log(moment().format("HH:mm:ss") + ' new socket connected');

		var user = {
			name: socket.handshake.query.username,
			id: socket.id
		};

		var session = {
			username: user.name,
			message: "user logged in",
			type: "session.start"
		};

		if(history.add_entry(session)){
			io.emit("connection.start", {
				username: user.name,
				time: moment().format("HH:mm:ss")
			});
		}

		socket.on("debug.history", function(data){
			socket.emit("debug.history", history.get_all());
		});

		socket.on('message:new', function(data){
			var msg = {
				username: user.name,
				message: data,
				type: "message.normal"
			};

			if(obj = history.add_entry(msg)){
				Object.assign(msg, obj);
			}

			else{
				throw new Error("Error on adding item into History");
			}

			io.emit('message:new', msg);
		});
	});

};