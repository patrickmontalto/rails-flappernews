angular.module('flapperNews')
.controller('NavCtrl', function($scope, Auth) {

	// Expose isAuthenticated and logout to $scope (return booleans)
	$scope.signedIn = Auth.isAuthenticated;
	$scope.logout = Auth.logout;

	// Try to set current user
	Auth.currentUser().then(function(user){
		$scope.user = user;
	});

	// Set user upon registration
	$scope.$on('devise:new-registration', function(e, user){
		$scope.user = user;
	});

	// Set user upon login
	$scope.$on('devise:login', function(e, user){
		$scope.user = user;
	});

	// Clear user upon logout
	$scope.$on('devise:logout', function(e, user){
		$scope.user = {};
	});

});