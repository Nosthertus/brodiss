(function(angular){
	var app = angular.module('Brodiss');

	app.controller('MainController', ['$scope', '$templateCache', function($scope, $templateCache){
		$templateCache.removeAll();
	}]);
})(angular);