(function(angular){
	var app = angular.module('node-chat');

	app.service('userService', ['$rootScope', 'socketService', function($rootScope, socket){
		var self = this;

		self._data = {
			id: null,
			name: null,
		};

		self.isGuest = true;

		self._populate = function(data){
			for(prop in self._data)
				self._data[prop] = data[prop];
		};

		self.getName = function(){
			return self._data.name;
		};

		self.getId = function(){
			return self._data.id;
		};

		self.login = function(credentials){
			self._populate(credentials);
			self.isGuest = false;

			$rootScope.$broadcast('user.login');
		};
	}]);
})(angular);