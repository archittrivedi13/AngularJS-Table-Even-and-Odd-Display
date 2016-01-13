var app = angular.module('myApp', []);
app.controller('customersCtrl', ['$scope', '$http' , function($scope, $http) {
$http.get('js/data.json')
	.success(function (response) {$scope.names = response.records;});
}]);