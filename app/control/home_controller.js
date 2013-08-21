
angular.module("Spirits").controller("HomeCtrl", function($scope){
	
	$scope.myInterval = 5000;
	$scope.slides = [
	                   {image: "img/TXSpiritsFall2012.jpg", text: "Spirits"},
	                   {image: "img/Persian_Kittens.jpg", text: "Kitty"},
	                   {image: "img/cute_kitty.jpg", text: "Cute Kitty"},
	                   {image: "img/cuter_kitty.jpg", text: "Cuter Kitty"},
	                   {image: "img/kitty_and_puppu.jpg", text: "Puppy and Kitty"}
	  ];
});

