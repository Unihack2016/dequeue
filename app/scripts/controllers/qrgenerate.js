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

    var getGoogleUrl = function(){
      $http.post('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBUNUyh_GhchatLF_Zrh3KPipxkmCaJSv0',
           {"longUrl": 'https://deque-3820e.firebaseapp.com/#/request_item/' + $scope.key}).then(
             function successCallback(response) {
               // TODO: Use these URLs to change the actual view
               $scope.shortenUrl = response.data.id;
           },
           function errorCallback(response) {
               // drop
               console.log("Error shortening URL with HTTP POST");
           });
    }

    $scope.init = function(key){
      $scope.key = key;
      getTinyAndQR();
      getGoogleUrl();
    };
  });
