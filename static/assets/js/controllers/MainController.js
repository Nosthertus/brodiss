(function(angular){
	var app = angular.module('Brodiss');

	app.controller('MainController', ['$scope', '$templateCache', '$state', 'userService', function($scope, $templateCache, $state, user){
		$templateCache.removeAll();

		$scope.$on('$locationChangeSuccess', function(event, state){
			if(user.isGuest){
				$state.go('login');
			}
		});
	}]);
})(angular);