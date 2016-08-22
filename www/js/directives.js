angular.module('directives', [])

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

.directive('validPhone',function(){
  return{
    require: 'ngModel',
    scope: {
			country: '='
		},
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.validPhone = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        var phoneNumber = modelValue,
            region = scope.country.iso,
            phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance(),
            number = phoneUtil.parse(phoneNumber, region),
            isValidNumber = phoneUtil.isValidNumber(number);

        return isValidNumber;
      };

      // If the user changes the country, then we have to re-validate the phone number
      scope.$watch('country', function() {
        if(scope.country) ctrl.$validate();
      });
    }
  };
})

.directive('confirmPassword',function(){
  return{
    require: 'ngModel',
    scope: {
			password: '=confirmPassword'
		},
    link: function(scope, elm, attrs, ctrl){
      ctrl.$validators.confirmPassword = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        return (modelValue === scope.password);
      };

      // If the user changes the password, then we have to re-validate the confirm password input
      scope.$watch('password', function() {
        if(scope.password) ctrl.$validate();
      });
    }
  };
})

;
