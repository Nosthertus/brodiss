(function(angular){
	var app = angular.module('Brodiss', ['ngMaterial', 'ui.router']);

	app.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('layout', {
			url: '/',
			views: {
				'@':{
					templateUrl: 'views/layout/index.html',
					controller: 'MainController',
				}
			}
		});

		$stateProvider.state('login', {
			url: '/login',
			templateUrl: 'views/site/login.html',
			controller: 'LoginController'
		});
	}]);
})(angular);