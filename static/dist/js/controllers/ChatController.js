(function(angular){
	var app = angular.module('node-chat');

	app.controller('ChatController', [
		'$scope',
		'socketService',
		"audioService",
		function($scope, socket, $audio){
			$scope.messages = [];

			$scope.send = function(event){
				if(event.keyCode == 13){
					socket.emit('message.new', $scope.message, function(socket, data){
						console.log(data);
					});

					$scope.message = '';
				}
			};

			/**
			 * Socket events
			 */		
			socket.on('message.new', function(socket, data){
				Object.assign(data, {
					type: "normal_message"
				});

				$scope.messages.push(data);

				$audio.sounds.message.play();
			});

			socket.emit("history.request", {});

			socket.on("history.sync", function(socket, data){
				var history = [];

				for(entry in data){
					history.push(data[entry]);
				}

				$scope.messages = history;
			});
			
			socket.on("session.start", (socket, data) => {
				$scope.messages.push(data);
			});
		}
	]);
})(angular);