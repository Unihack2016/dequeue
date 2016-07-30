/**
 * Created by vatsalyagoel on 31/07/2016.
 */

angular.module('dequeApp')
  .controller('DurationCtrl', function ($scope, $timeout) {
    $scope.duration  = "Tick tock...";
    $scope.tickInterval = 1000;

    $scope.init = function (startTime, endTime) {
      $scope.endTime = endTime;
      $timeout(tick, $scope.tickInterval);
    };

    var str_pad_left = function(string,pad,length) {
      return (new Array(length+1).join(pad)+string).slice(-length);
    };

    var tick = function() {
      var duration = Math.floor(($scope.endTime - Date.now())/1000);
      if(duration < 0 )
      {
        $scope.duration = "00:00"
      }
      else
      {
        var minutes = Math.floor(duration / 60);
        var seconds = duration % 60;
        $scope.duration = str_pad_left(minutes,'0',3)+':'+str_pad_left(seconds,'0',2);
        $timeout(tick, $scope.tickInterval);
      }
    }

  });
