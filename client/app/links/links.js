angular.module('shortly.links', [])

.controller('LinksController',['$scope','Links', function ($scope, Links) {

  $scope.data = {
    links: null
  };

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function (links) {
        console.log(links);
        $scope.data.links = links.data;
      })
  };

  $scope.getLinks();


  // ask service to give us all the deets
    // service will ask databasu for le infos
    // get all bak; force jason chang to stop saying doggie
  // get info back from service
    // push into links array

}]);
