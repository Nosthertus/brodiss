(function(angular){
	var app = angular.module('node-chat');

	app.controller('LoginController', ['$scope', 'userService', '$state', 'socketService', function($scope, user, $state, socketService){
		$scope.user = {};

		$scope.submit = function(state){
			if(state == 'login'){
				user.login($scope.user);
			}
		};

		$scope.$on('user.login', function(event){
			socketService.login({
				name: user.getName()
			});

			$state.go('chat');
		});
	}]);
})(angular);