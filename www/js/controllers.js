angular.module('controllers', [])

.controller('FormCtrl', function($scope, $state, i18n) {
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
    confirm_password: '',
    accept_terms: false
  };

  $scope.submit = function(user){
    // You can also check stuff before submitting
    if(user.accept_terms){
      $state.go("user");
    }
  }
})

;
