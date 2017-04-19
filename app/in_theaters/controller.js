(function(angular) {
    'use strict';

    var module = angular.module('moviecat.in_theaters', ['ngRoute']);

    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl: 'in_theaters/view.html',
            controller: 'InTheatresController'
        });
    }]);

    module.controller('InTheatresController', ['$scope', '$http', function($scope, $http) {

        $http.get('/app/in_theaters.json').then(
            function(data) {
                $scope.dataList = data.data.subjects;

            },
            function(err) {
                console.log(err);
            });
    }]);



})(angular)
