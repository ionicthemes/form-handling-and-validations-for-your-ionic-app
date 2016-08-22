angular.module('controllers', [])

.controller('FormCtrl', function($scope, $state, i18n) {

  $scope.phoneError = false;

  $scope.countries = [{
    iso: 'US',
    name: 'United States',
    code: '+1'
  }, {
    iso: 'UY',
    name: 'Uruguay',
    code: '+598'
  }];

  $scope.user = {
    gender: 'Male',
    phone: {
      country: {
        iso: 'US',
        name: 'United States',
        code: '+1'
      },
      number: ''
    },
    username: '',
    name: '',
    surname: '',
    email: '',
    password: '',
    confirm_password: ''
  };

  $scope.submit = function(user){
    var pass = user.password,
        confirm_pass = user.confirm_password,
        phoneNumber = user.phone.number,
        region = user.phone.country.iso;
    if(pass != confirm_pass){
      $scope.not_match_password = "true";
    }
    else{
      $scope.not_match_password = "";
      if(user.accept){
        $scope.not_accept_terms = "";
        var phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
            number = phoneUtil.parse(phoneNumber, region),
            isValidNumber = phoneUtil.isValidNumber(number);
            if(! isValidNumber){
              console.log(isValidNumber);
              $scope.phoneError = true;
              $scope.phoneErrorMessage = "Enter a valid phone";
            }
            else{
              $scope.phoneError = false;
              $scope.phoneErrorMessage = "";
              $state.go("user");
            }
      }
      else{
        $scope.not_accept_terms = "true";
      }
    }
  }
})

;
