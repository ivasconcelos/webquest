'use strict';

angular.module('listplayers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listplayers', {
    templateUrl: 'listplayers/listplayers.html',
    controller: 'ListPlayersCtrl'
  });
}])

.controller('ListPlayersCtrl', ['$scope', 'ngTableParams', '$http', function($scope, ngTableParams, $http) {

        $scope.players=[];

        $http.get('http://192.168.1.110:8080/webquest/listplayers').
            success(function(data, status, headers, config) {
                $scope.players=data;
                console.log(data);

            }).
            error(function(data, status, headers, config) {
                /* TODO error*/
                alert("error");

            });


        /* TODO Pagination */
        $scope.tableParams = new ngTableParams({
            page: 2,            // show first page
            count: 2           // count per page
        }, {
            total: $scope.players.length, // length of data
            getData: function($defer, params) {
                $defer.resolve($scope.players.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

    }]);