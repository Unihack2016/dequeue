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
          auth: ["$q", "$location", "$firebaseAuth", function($q, $location, $firebaseAuth) {
            var ref = $firebaseAuth();
            var deferred = $q.defer();
            deferred.resolve();
            if (ref.$getAuth()) {
              return deferred.promise;
            } else {
              return $location.path('/login');
            }
          }]
        }
      })
      .when('/logout', {
        templateUrl: 'views/main.html',
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
