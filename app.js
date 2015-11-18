'use strict';

/**
 * @name sigmaTest
 * @description
 * # sigmaTest
 *
 * Main module of the application.
 */
angular.module('sigmaTest', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeController'
            }).
            otherwise({ redirectTo: '/' });
    }]);