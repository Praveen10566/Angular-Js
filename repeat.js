/*ng-repeat is like for loop in javascript or other programing language*/


var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
$scope.names = [
    {name: "BoB", city: "milpitas"},
    {name: "ToM", city: "fremont"},
    {name: "PaL", city: "SFO"}
]
});
