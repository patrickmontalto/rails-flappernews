// posts controller
angular.module('flapperNews')
.controller('PostsCtrl', function($scope, posts, post) {
	$scope.post = post;

	$scope.addComment = function() {
		if ($scope.body === '') { return; }
		posts.addComment(post.id, {
			body: $scope.body,
			author: 'user',
		}).success(function(comment) {
			$scope.post.comments.push(comment);
		});
		// Clear comment form
		$scope.body = '';
	};

	$scope.incrementUpvotes = function(comment) {
		posts.upvoteComment(post, comment);
	};
});