(function(angular) {
    'use strict';

    var module = angular.module('moviecat.in_theaters', ['ngRoute']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl: 'in_theaters/view.html',
            controller: 'InTheatresController'
        });
    }]);

    module.controller('InTheatresController', ['$scope', function($scope) {

    }]);

})(angular)
