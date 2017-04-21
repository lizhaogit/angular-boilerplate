(function(angular) {
    'use strict';

    var module = angular.module('moviecat.in_theaters', ['ngRoute', 'moviecat.services.http']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters/:page', {
            templateUrl: 'in_theaters/view.html',
            controller: 'InTheatresController'
        });
    }]);

    module.controller('InTheatresController', ['$scope', '$routeParams', '$route', 'HttpService', function($scope, $routeParams, $route, HttpService) {
        var count = 10;
        var page = parseInt($routeParams.page);
        var start = (page - 1) * count;
        $scope.loading = true;
        $scope.dataList = [];
        $scope.message = '';
        $scope.totalCount = 0;
        $scope.totalPages = 0;
        $scope.currentPage = page;
        HttpService.jsonp('https://api.douban.com/v2/movie/in_theaters', { start: start, conut: count }, function(data) {
            $scope.dataList = data.subjects;
            $scope.totalCount = data.total;
            $scope.totalPages = Math.ceil($scope.totalCount / count)
            $scope.loading = false;
            $scope.$apply();
        });
        $scope.go = function(page) {
            $route.updateParams({ page: page });
        };
    }]);



})(angular);
