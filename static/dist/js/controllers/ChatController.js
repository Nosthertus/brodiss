(function(angular){
	var app = angular.module('node-chat');

	app.controller('ChatController', ['$scope', 'socketService', function($scope, socket){
		$scope.messages = [];


		$scope.send = function(event){
			if(event.keyCode == 13){
				socket.emit('message:new', $scope.message, function(socket, data){
					console.log(data);
				});

				$scope.message = '';
			}
		};

		/**
		 * Socket events
		 */		
		socket.on('message:new', function(socket, data){
			$scope.messages.push({
				username: data.username,
				message: data.message,
				type: "normal_message"
			});
		});

		socket.on("connection.start", (socket, data) => {
			$scope.messages.push({
				username: data.username,
				message: "",
				type: "system_announce"
			});
		});
	}]);
})(angular);