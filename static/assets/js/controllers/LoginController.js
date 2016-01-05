(function(angular){
	var app = angular.module('Brodiss');

	app.controller('LoginController', ['$scope', 'userService', function($scope, user){
		$scope.user = {};

		$scope.submit = function(state){
			if(state == 'login'){
				user.login($scope.user);
			}
		};
	}]);
})(angular);