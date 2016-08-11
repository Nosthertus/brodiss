(function(angular){
	var app = angular.module('node-chat');

	app.controller('MainController', [
		'$scope',
		'$templateCache',
		'$state',
		'userService',
		'$mdDialog',
		"socketService",
		"audioService",
		function($scope, $templateCache, $state, user, $mdDialog, $socket, $audio){
			$templateCache.removeAll();

			$scope.$on('$locationChangeSuccess', function(event, state){
				if(user.isGuest){
					$state.go('login');
				}
			});

			$scope.$on("user.login", function(){
				$audio.loadSounds();
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
		}
	]);
})(angular);