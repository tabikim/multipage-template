// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app

myApp.config(function($stateProvider) {
    $stateProvider
    	.state('home', {
			url:'/',
			templateUrl: 'templates/home.html',
			controller: 'HomeController',
		})
		// Configure states for "content" and "about"
		.state('content', {
			url:'/content',
			templateUrl:'templates/content.html',
			controller:'ContentController'
		})
		.state('about', {
			url:'/about',
			templateUrl:'templates/about.html',
			controller:'AboutController'
		})
})
// Landing page controller: define $scope.number as a number
	myApp.controller('HomeController', function($scope) {
		$scope.number = 7;
	})

// About page controller: define $scope.about as a string
	myApp.controller('AboutController', function($scope) {
		$scope.about = "Green Tea Latte";
	})

// Content controller: define $scope.url as an image
	myApp.controller('ContentController', function($scope) {
		$scope.url = "http://4.bp.blogspot.com/-bX4c6TOniQ8/UYb8i3y4jKI/AAAAAAAAEfQ/xhMgztbEpow/s640/tumblr_m08hcpGYlS1r9se00o1_500_large.png";
	})


