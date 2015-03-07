angular.module('shortly.links', [])

.controller('LinksController',['$scope','Links', function ($scope, Links) {
  // $scope.link = [
  //   // {
  //     // title: 'buttfaces',
  //     // visits: '69',
  //     // url: 'http://buttfaces.com',
  //     // base_url: 'localface.com/facepoop',
  //     // code: '42+69'
  //   // }
  // ];
  $scope.data = {
    links: null
  };

  // $scope.getLinks = function () {
  //   Links.getLinks()
  //     .then(function (link) {
  //       $scope.links.push(link);
  //       // $window.localStorage.setItem('com.shortly', link);
  //       // $location.path('/links');
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };


  $scope.getLinks = function() {
    // console.log(Links);
    Links.getLinks()
      .then(function (links) {
        console.log(links);
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
