(function(angular) {
    // Declare app level module which depends on views, and components
    angular.module('myApp', ['ngRoute','movie_list']).config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
    }]).controller('myController', ['$scope', '$location', function($scope, $location) {
        $scope.location = $location;
        $scope.$watch('location.path()', function(now) {
            if (now.startsWith('/in_theaters')) {
                $scope.type = 'in_theaters';
            } else if (now.startsWith('/coming_soon')) {
                $scope.type = 'coming_soon';
            } else if (now.startsWith('/top250')) {
                $scope.type = 'top250';
            }
        })
    }]);

})(angular)
