'use strict';

angular.module('protractorNgrouteBugApp')
  .controller('NavCtrl', function ($scope, $window, $http, $location) {
    $scope.goToAbout = function() {
      angular.element('body').injector().get('$browser').
        notifyWhenNoOutstandingRequests(function() {
          console.log('angular ready', new Date());
        });
      $location.path("/about");
    };
  });
