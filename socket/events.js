var History = require("./../lib/History");
var moment  = require("moment");

module.exports = function(io){
	var history = new History({
		time_format: "YYYY-MM-DD HH:mm:ss"
	});

	io.on('connection', function(socket){
		console.log(moment().format("HH:mm:ss") + ' new socket connected');

		var session = {
			id: socket.id,
			username: "guest"
		};

		socket.on("debug.history", function(data){
			socket.emit("debug.history", history.get_all());
		});

		socket.on("session.start", function(data){
			var login = data;

			session.username = data.username;

			Object.assign(login, {
				login_time: moment().format("YYYY-MM-DD HH:mm:ss"),
				type: "session.start"
			});

			if(entry = history.add_entry(login)){
				socket.emit("history_sync", {
					history: "some history"
				});

				io.emit("session.start", entry);

				socket.emit("history.sync", history.get_all());
			}

			else{
				throw new Error("Error on adding new entry into History");
			}
		});

		socket.on("history.request", function(){
			socket.emit("history.sync", history.get_all());
		});

		socket.on('message.new', function(data){
			var msg = {
				username: session.username,
				message: data,
				type: "message.normal"
			};

			if(obj = history.add_entry(msg)){
				Object.assign(msg, obj);
			}

			else{
				throw new Error("Error on adding item into History");
			}

			io.emit('message.new', msg);
		});
	});

};