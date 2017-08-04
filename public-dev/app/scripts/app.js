'use strict';

/**
 * @ngdoc overview
 * @name yoangularApp
 * @description
 * # yoangularApp
 *
 * Main module of the application.
 */
angular
  .module('yoangularApp', [
    'ngGMap',
    //'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
    //'ngTouch'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .when('/online', {
        templateUrl: 'views/online.html',
        controller: 'onlineCtrl',
        controllerAs: 'online'
      })
      .when('/rental', {
        templateUrl: 'views/rental.html',
        controller: 'rentalCtrl',
        controllerAs: 'rental'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
