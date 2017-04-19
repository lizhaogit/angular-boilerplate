(function(angular) {
    'use strict';

    var module = angular.module('moviecat.top250', ['ngRoute']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250', {
            templateUrl: 'top250/view.html',
            controller: 'top250Controller'
        });
    }]);

    module.controller('top250Controller', ['$scope', '$http', function($scope, $http) {
        $http.get('/app/top.json').then(
            function(data) {
                $scope.dataList = data.data.subjects;
            },
            function(err) {
                console.log(err);
            });
    }]);

})(angular)
