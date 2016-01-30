(function(angular){
	var app = angular.module('Brodiss');

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

		$stateProvider.state('chat', {
			url: '/chat',
			parent: 'layout',
			views: {
				'main@layout': {
					templateUrl: 'views/chat/index.html',
					controller: 'ChatController'
				}
			}
		});
	}]);
})(angular);