// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, $timeout, Auth) {
  $scope.messageStyle = '';
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
        $scope.message = 'Username or Password is incorrect!';
        // console.log($scope.message);
        $scope.messageStyle = 'error';
        $timeout(function(){
          $scope.message = '';
          $scope.messageStyle = '';
        }, 3500);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
        $scope.message = 'Username is taken!';
        // console.log($scope.message);
        $scope.messageStyle = 'error';
        $timeout(function(){
          $scope.message = '';
          $scope.messageStyle = '';
        }, 3500);
      });
  };
});
