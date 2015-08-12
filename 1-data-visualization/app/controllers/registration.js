app.controller('registration', function($scope, $location){

	$scope.name= "Barbara";
	
	$scope.login = function() {
		$location.path("/graph")
 	} //login
 	$scope.register = function() {
 		$location.path("/graph")
 	} //register
});