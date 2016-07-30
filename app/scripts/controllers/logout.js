'use strict';

/**
 * @ngdoc function
 * @name dequeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dequeApp
 */
angular.module('dequeApp')
  .controller('LogoutCtrl', ["$location", function ($location) {
      localStorage.clear();
      $location.path("/");
    }
  ]);

