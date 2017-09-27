var app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "http://jsonplaceholder.typicode.com/posts"
    }).then(function mySuccess(response) {
        $scope.data = response.data;
    }, function myError(response) {
        $scope.data = response.statusText;
    });
});