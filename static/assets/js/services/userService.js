(function(angular){
	var app = angular.module('Brodiss');

	app.service('userService', ['$rootScope', 'socketService', function($rootScope, socket){
		var self = this;

		self._data = {
			id: null,
			name: null,
		};

		self.isGuest = true;

		self.getName = function(){
			return self._data.name;
		};

		self.getId = function(){
			return self._data.id;
		};

		self.login = function(credentials){
			socket.emit('user:login', credentials, function(socket, data){
				console.log(socket);
			});
		};
	}]);
})(angular);