'use strict';

/**
 * @ngdoc function
 * @name protractorNgrouteBugApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the protractorNgrouteBugApp
 */
angular.module('protractorNgrouteBugApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
