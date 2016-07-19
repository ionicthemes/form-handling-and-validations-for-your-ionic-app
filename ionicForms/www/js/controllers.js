angular.module('controllers', [])

.controller('FormCtrl', function($scope, $state) {
  $scope.user ={ sex: 'Male'};

  $scope.areEquals = function(pass, confirm_pass){
    return pass!=confirm_pass;
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
