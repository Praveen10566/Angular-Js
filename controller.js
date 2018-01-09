var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.firstname = "Praveen";
    $scope.changeName = function() {
        $scope.firstname = "Yarramalli";
    };
});
