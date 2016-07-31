/**
 * Created by vatsalyagoel on 31/07/2016.
 */
'use strict';

angular.module('dequeApp')
  .controller('QRCtrl', function($scope, $http){

    var getTinyAndQR = function(){
      var url = "http://api.qrserver.com/v1/create-qr-code/?data=https://deque-3820e.firebaseapp.com/%23/request_item/" + $scope.key + "&size=150x150";
      $scope.QRUrl = url;
    };

    $scope.init = function(key){
      $scope.key = key;
      getTinyAndQR();
    };
  });
