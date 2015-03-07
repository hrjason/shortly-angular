angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $timeout, Links) {
  $scope.messageStyle = '';
  $scope.link = {};
  $scope.addLink = function () {
    console.log($scope.url);
    Links.addLink($scope.url)
      .then(function (data) {
        // $window.localStorage.setItem('com.shortly', token);
        // $location.path('/links');
        // clears url field
        $scope.url = null;
      })
      .catch(function (error) {
        console.error(error);
        $scope.message = 'Failed to shorten!';
        // console.log($scope.message);
        $scope.messageStyle = 'error';
        $timeout(function(){
          $scope.message = '';
          $scope.messageStyle = '';
        }, 3500);
      });
  };

});
