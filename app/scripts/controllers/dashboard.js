/**
 * Created by vatsalyagoel on 30/07/2016.
 */
angular.module('dequeApp')
  .controller('DashboardCtrl', ["$scope","$firebaseAuth", "$firebaseArray", function ($scope, $firebaseAuth, $firebaseArray) {
      var queueItemsRef = firebase.database().ref().child("queueitems");
      var user = $firebaseAuth().$getAuth();
      var query = queueItemsRef.orderByChild("userid").equalTo(user.uid);
      $scope.queueItems = $firebaseArray(query);
      $scope.queueItems.$loaded().then(function() {
            console.log($scope.queueItems.$value); // "bar"
          });

    }
  ]);

