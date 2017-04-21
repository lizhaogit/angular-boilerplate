(function(angular) {
    'use strict';

    var module = angular.module('moviecat.top250', ['ngRoute', 'moviecat.services.http']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250', {
            templateUrl: 'top250/view.html',
            controller: 'top250Controller'
        });
    }]);

    module.controller('top250Controller', ['$scope', 'HttpService', function($scope, HttpService) {
        $scope.loading = true;
        $scope.dataList = [];
        $scope.message = '';
        $scope.totalCount = 0;
        HttpService.jsonp('https://api.douban.com/v2/movie/top250', {}, function(data) {
            $scope.dataList = data.subjects;
            $scope.loading = false;
            $scope.$apply();
        })
    }]);

})(angular)
