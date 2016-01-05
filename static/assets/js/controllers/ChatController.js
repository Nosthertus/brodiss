(function(angular){
	var app = angular.module('Brodiss');

	app.controller('ChatController', ['$scope', 'socketService', function($scope, socket){
		$scope.messages = [];

		$scope.messages.push({
			username: 'user test',
			message: 'Lorem ipsum Voluptate aliqua reprehenderit qui reprehenderit dolor ea quis enim laboris eiusmod nisi.'
		});

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
			$scope.messages.push(data);
		});
	}]);
})(angular);