'use strict';

angular.module('selectwinners', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selectwinners', {
    templateUrl: 'selectwinners/selectwinners.html',
    controller: 'SelectWinnersCtrl'
  });
}])

.controller('SelectWinnersCtrl', [function() {

}]);