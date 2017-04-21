(function(angular) {
    'use strict';

    var module = angular.module('moviecat.coming_soon', ['ngRoute', 'moviecat.services.http']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/coming_soon', {
            templateUrl: 'coming_soon/view.html',
            controller: 'ComingSoonController'
        });
    }]);

    module.controller('ComingSoonController', ['$scope', 'HttpService', function($scope, HttpService) {
        $scope.dataList = [];
        $scope.message = '';
        HttpService.jsonp('https://api.douban.com/v2/movie/coming_soon', {}, function(data) {
            $scope.dataList = data.subjects;
            $scope.$apply('dataList');
        })
    }]);

})(angular)
