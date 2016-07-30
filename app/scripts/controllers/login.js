'use strict';

/**
 * @ngdoc function
 * @name dequeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dequeApp
 */
angular.module('dequeApp')
  .controller('LoginCtrl', ["$scope", "$firebaseAuth", function ($scope, $firebaseAuth) {
      var auth = $firebaseAuth();

      $scope.signIn = function () {
        $scope.firebaseUser = null;
        $scope.error = null;

        auth.$signInWithEmailAndPassword($scope.vm.username, $scope.vm.password).then(function (firebaseUser) {
          $scope.firebaseUser = firebaseUser;
        }).catch(function (error) {
          $scope.error = error;
        });
      };
    }
  ]);

