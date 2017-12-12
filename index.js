
var app=angular.module("myCalc",[]);
app.factory("clcMul", function () {
                var factory={};
                factory.multiply=function (a,b) {
                                             return  a * b;
                }
                return myCalc;
});

app.services("appServices",function (clcMul) {
      this.square=function (a) {
                             return calMul.multiply(a,a);
      }
});

app.controller("appController",function (appServices) {
                                                  $scope.square=function () {
                                                                          $scope.result=multiply.square($scope.number);
                                                  }
});


