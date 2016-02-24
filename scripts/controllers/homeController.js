'use strict';

angular.module('worldClock')
    .controller('homeController', ['$scope', '$interval', function($scope, $interval) {

        var interval = 1000;
        var timer = undefined;


        $scope.worldTime = {
            startTime: null,
            toronto: {
                time: null,
                difference: 0,
                displayTime: null
            },
            london: {
                time: null,
                difference: 6,
                displayTime: null
            },
            sydney: {
                time: null,
                difference: -13,
                displayTime: null
            }
        }

        var init = function() {
            $scope.worldTime.startTime = moment().format('HH:mm:ss');
        }

        var stopTimer = function() {
            $interval.cancel(timer);
            timer = undefined;
        }

        $scope.setTime = function(setStartTime) {
            setStartTime = (setStartTime !== undefined) ? setStartTime : true;
            if (setStartTime) {
                $scope.worldTime.toronto.time = moment($scope.worldTime.startTime, 'HH:mm:ss');
            }
            $scope.worldTime.london.time = $scope.worldTime.toronto.time.clone().add($scope.worldTime.london.difference, 'hours');
            $scope.worldTime.sydney.time = $scope.worldTime.toronto.time.clone().add($scope.worldTime.sydney.difference, 'hours');
            var addSeconds = interval / 1000;
            $scope.tick = function() {
                $scope.worldTime.toronto.displayTime = $scope.worldTime.toronto.time.add(addSeconds, 'seconds').format('HH:mm:ss');
                $scope.worldTime.london.displayTime = $scope.worldTime.london.time.add(addSeconds, 'seconds').format('HH:mm:ss');
                $scope.worldTime.sydney.displayTime = $scope.worldTime.sydney.time.add(addSeconds, 'seconds').format('HH:mm:ss');
            }
            if (timer) {
                stopTimer();
            }
            $scope.tick();
            timer = $interval($scope.tick, interval);
        }

        $scope.setDifference = function() {
            stopTimer();
            $scope.setTime(false);
        }

        init();
}]);
