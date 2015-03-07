angular.module('shortly.links', [])

.controller('LinksController',['$scope','Links', function ($scope, Links) {

  $scope.data = {
    links: null
  };

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function (links) {
        console.log(links);
        console.log($scope.data.links);
        $scope.data.links = links;
        // $window.localStorage.setItem('com.shortly', link);
        // $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.getLinks();


  // ask service to give us all the deets
    // service will ask databasu for le infos
    // get all bak; force jason chang to stop saying doggie
  // get info back from service
    // push into links array

}]);
