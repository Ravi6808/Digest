var app=angular.module("myApp2",[]);

app.controller("myController2",function($scope){
$scope.name="Ravinder";
$scope.changeName=function()
{
$scope.name="ravikumar";
}
document.getElementById("apply").addEventListener('click',function()
{

$scope.$apply(function(){
$scope.name="Ravinder";
});

});
});