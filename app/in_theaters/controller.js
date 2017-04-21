(function(angular) {
    'use strict';

    var module = angular.module('moviecat.in_theaters', ['ngRoute', 'moviecat.services.http']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl: 'in_theaters/view.html',
            controller: 'InTheatresController'
        });
    }]);

    module.controller('InTheatresController', ['$scope', 'HttpService', function($scope, HttpService) {
        $scope.loading = true;
        $scope.dataList = [];
        $scope.message = '';
        $scope.totalCount = 0;
        HttpService.jsonp('https://api.douban.com/v2/movie/in_theaters', {}, function(data) {
            $scope.dataList = data.subjects;
            $scope.totalCount = data.total;
            $scope.loading = false;
            $scope.$apply();
        })
    }]);



})(angular);
