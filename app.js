'use strict';

/**
 * @name worldClock
 * @description
 * # sigmaTest
 *
 * Main module of the application.
 */
angular.module('worldClock', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeController'
            }).
            otherwise({ redirectTo: '/' });
    }]);
