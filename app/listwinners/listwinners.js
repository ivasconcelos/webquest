'use strict';

angular.module('listwinners', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listwinners', {
    templateUrl: 'listwinners/listwinners.html',
    controller: 'ListWinnersCtrl'
  });
}])

.controller('ListWinnersCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.winners=[];

        $http.get('http://192.168.1.110:8080/webquest/listplayers').
            success(function(data, status, headers, config) {
                $scope.winners=data;
                console.log(data);

            }).
            error(function(data, status, headers, config) {
                /* TODO error*/
                alert("error");

            });
}]);