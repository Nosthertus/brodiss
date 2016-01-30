(function(angular){
	var app = angular.module('Brodiss');

	app.service('socketService', ['$rootScope', '$window', function($rootScope, $window){
		var socket = null;

		var self = this;

		self.connect = function(data){
			var qs = serialize({
				username: data
			});
			socket = io.connect($window.location.origin, {query: qs});
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

		function serialize(obj, prefix) {
			var str = [];
			for(var p in obj) {
				if (obj.hasOwnProperty(p)) {
					var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
					str.push(typeof v == "object" ?
						serialize(v, k) :
						encodeURIComponent(k) + "=" + encodeURIComponent(v));
				}
			}
			return str.join("&");
		}
	}]);
})(angular);