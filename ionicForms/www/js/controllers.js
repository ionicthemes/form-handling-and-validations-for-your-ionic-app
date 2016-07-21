angular.module('controllers', [])

.controller('FormCtrl', function($scope, $state) {
  $scope.user ={
    sex: 'Male',
    username: '',
    name: '',
    surname: '',
    email: '',
    password: '',
    confirm_password: ''};
  $scope.match_password = "false";

  $scope.areEquals = function(pass, confirm_pass){
    return pass!=confirm_pass;
  }

  $scope.submit = function(user){
    var pass = user.password,
        confirm_pass = user.confirm_password;
    if(pass != confirm_pass){
      $scope.match_password = "true";
    }
    else{
      $scope.match_password = "false";
    }
  }
})

.directive('validUsername',function(){
  return{
    require: 'ngModel',
    link: function(scope, ele, attrs, c){
      scope.$watch(attrs.ngModel, function(username_value){
        if(username_value=="abc123" || username_value=="123abc")
        {
         c.$setValidity('validusername', false);
        }
        else
        {
         c.$setValidity('validusername', true);
        }
      });
    }
  };
})
