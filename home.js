/**
 * http://usejsdoc.org/
 */
var app = angular.module('Application', ['ngResource']);
 
app.factory('UserFactory', function($resource){
    return $resource('users.json')
});
 
app.controller('MainCtrl', function($scope, UserFactory) {
    $scope.text = 'Hello World!';
    $scope.users = UserFactory.get();
});