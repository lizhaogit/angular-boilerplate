(function(angular) {
    'use strict';

    var module = angular.module('moviecat.top250', ['ngRoute']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250', {
            templateUrl: 'top250/view.html',
            controller: 'top250Controller'
        });
    }]);

    module.controller('top250Controller', ['$scope', function($scope) {

    }]);

})(angular)
