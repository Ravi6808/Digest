var app=angular.module("myApp1",[]);

app.controller("myController1",function($scope){
$scope.name="Ravinder";
$scope.changeName=function()
{
$scope.name="ravikumar";
}
document.getElementById("digest").addEventListener('click',function()
{
$scope.name="Ravinder";
$scope.$digest();

});
});