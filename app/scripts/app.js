'use strict';

/**
 * @ngdoc overview
 * @name dequeApp
 * @description
 * # dequeApp
 *
 * Main module of the application.
 */
angular
  .module('dequeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard',
        resolve: {
          auth: ["$q", "$location", function($q, $location) {
            var deferred = $q.defer();
            deferred.resolve();
            if (localStorage.getItem("user")) {
              return deferred.promise;
            } else {
              return $location.path('/login');
            }
          }]
        }
      })
      .when('/logout', {
        controller: 'LogoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
