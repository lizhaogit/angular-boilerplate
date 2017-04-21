(function(angular) {
    'use strict';

    var module = angular.module('moviecat.coming_soon', ['ngRoute', 'moviecat.services.http']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/coming_soon/:page', {
            templateUrl: 'coming_soon/view.html',
            controller: 'ComingSoonController'
        });
    }]);

    module.controller('ComingSoonController', ['$scope','$routeParams','$route','HttpService', function($scope,$routeParams,$route,HttpService) {
        var count = 10;
        var page = parseInt($routeParams.page);
        var start = (page - 1) * count;
        $scope.loading = true;
        $scope.dataList = [];
        $scope.message = '';
        $scope.totalCount = 0;
        $scope.totalPages = 0;
        $scope.currentPage = page;
        HttpService.jsonp('https://api.douban.com/v2/movie/coming_soon', {}, function(data) {
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

})(angular)
