(function(angular){
	var app = angular.module('node-chat');

	app.service('socketService', ['$rootScope', '$window', function($rootScope, $window){
		var socket = socket = io.connect($window.location.origin);

		var self = this;

		self.login = function(data){
			self.emit("session.start", {
				username: data.name
			});
		};

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