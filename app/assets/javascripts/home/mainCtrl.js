// main controller

angular.module('flapperNews')
.controller('MainCtrl', function($scope, posts){
	// Posts data
	$scope.posts = posts.posts

	$scope.addPost = function() {
		if (!$scope.title || $scope.title === '') { return; }
		posts.create({
			title: $scope.title,
			link: $scope.link
		});

		// Clear title & link
		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post) {
		posts.upvote(post);
	}
})