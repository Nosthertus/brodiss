(function(angular){
	var app = angular.module('Brodiss');

	app.service('socket', ['$rootScope', function($rootScope){
		var socket = io();

		var self = this;

		self.on = function(event, callback){
			socket.on(event, function(data){
				$rootScope.$apply(function(){
					callback(socket, data);
				});
			});
		};

		self.emit = function(event, data, callback){
			socket.emit(event, data, function(arg){
				$rootScope.$apply(function(){
					if(callback)
						callback(socket, arg);
				});
			})
		};
	}]);
})(angular);