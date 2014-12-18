'use strict';

/**
 * @ngdoc function
 * @name protractorNgrouteBugApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the protractorNgrouteBugApp
 */
angular.module('protractorNgrouteBugApp')
  .controller('AboutCtrl', function ($scope, $window, $http, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('notfound').then(null, function () {
      console.log('ajax done', new Date());
    });
  });
