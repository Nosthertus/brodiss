(function(angular){
	var app = angular.module('Brodiss');

	app.controller('MainController', ['$scope', '$templateCache', '$state', 'userService', '$mdDialog', function($scope, $templateCache, $state, user, $mdDialog){
		$templateCache.removeAll();

		$scope.$on('$locationChangeSuccess', function(event, state){
			if(user.isGuest){
				$state.go('login');
			}
		});

		$scope.alert = function(title, string){
			var alert = $mdDialog.alert({
				title: title,
				textContent: string,
				ariaLabel: 'Alert',
				ok: 'ok'
			});

			$mdDialog.show(alert);
		};
	}]);
})(angular);