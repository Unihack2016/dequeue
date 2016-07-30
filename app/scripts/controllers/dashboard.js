'use strict';
/**
 * Created by vatsalyagoel on 30/07/2016.
 */
angular.module('dequeApp')
  .controller('DashboardCtrl', ["$scope","$firebaseAuth", "$firebaseArray", "$timeout", "$http", "$firebaseObject",
      function ($scope, $firebaseAuth, $firebaseArray, $timeout, $http, $firebaseObject) {

      $scope.tickInterval = 30000;
      var tick = function() {
        var queueItemsRef = firebase.database().ref().child("queueitems");
        var user = $firebaseAuth().$getAuth();
        var query = queueItemsRef.orderByChild("userid").equalTo(user.uid);
        $scope.queueItems = $firebaseArray(query);
        $timeout(tick,  $scope.tickInterval);
      }
      tick();

      $scope.addQueueItem = function(){
        var multiplier = 60000;
        var restaurantUser = $firebaseAuth().$getAuth().uid;
        $scope.queueItems.$add({
          endtime: Date.now() + (parseInt(document.getElementById('wait').value, 10) * multiplier),
          name: $scope.customer.name,
          number: parseInt(document.getElementById('customer').value, 10),
          startime: Date.now(),
          userid: restaurantUser
        }).then(function (ref) {
            console.log(ref);
            console.log(ref.path.o[1]);
            var id = ref.path.o[1];
            var longUrl = 'https://deque-3820e.firebaseapp.com/' + restaurantUser + '/' + id;
            console.log($scope.queueItems);
            $scope.queueItems.$getRecord(id).longUrl = longUrl;

            $http.post('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBUNUyh_GhchatLF_Zrh3KPipxkmCaJSv0',
                {"longUrl": longUrl}).then(
                function successCallback(response) {
                    console.log(response);
                    console.log(response.data.id);
                    $scope.queueItems.$getRecord(id)['shortUrl'] = response.data.id;
                    $scope.queueItems.$getRecord(id)['qrUrl'] = response.data.id + ".qr";  // TODO: Put QR code into the DB
                },
                function errorCallback(response) {
                    // drop
                    console.log("Error shortening URL with HTTP POST");
                    console.log(response);
                });
            $scope.queueItems.$save(id);
            // $firebaseObject(queueItems.id).$save();

        });
      };
    }
  ]);
