'use strict';

/**
 * @ngdoc function
 * @name protractorNgrouteBugApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the protractorNgrouteBugApp
 */
angular.module('protractorNgrouteBugApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
