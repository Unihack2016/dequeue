'use strict';

/**
 * @ngdoc function
 * @name dequeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dequeApp
 */
angular.module('dequeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
