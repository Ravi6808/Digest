var app=angular.module("myApp",[]);

app.controller("myController",function($scope){

$scope.count=-1;
$scope.$watch("myText",function(newValue,oldValue){
$scope.count++;
});
});