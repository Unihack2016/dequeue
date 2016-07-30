'use strict';

/**
 * @ngdoc function
 * @name dequeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dequeApp
 */
angular.module('dequeApp')
  .controller('LoginCtrl', ["$scope","$location" ,"$firebaseAuth", function ($scope,$location, $firebaseAuth) {
      var auth = $firebaseAuth();

      $scope.signIn = function () {
        $scope.firebaseUser = null;
        $scope.error = null;

        auth.$signInWithEmailAndPassword($scope.vm.username, $scope.vm.password).then(function (firebaseUser) {
          $scope.firebaseUser = firebaseUser;
          localStorage.setItem('user', firebaseUser.u);
          $location.path( "/" );
        }).catch(function (error) {
          $scope.error = error;
        });
      };
    }
  ]);

