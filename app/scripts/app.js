'use strict';

/**
 * @ngdoc overview
 * @name protractorNgrouteBugApp
 * @description
 * # protractorNgrouteBugApp
 *
 * Main module of the application.
 */
angular
  .module('protractorNgrouteBugApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
