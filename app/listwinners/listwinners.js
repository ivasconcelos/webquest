'use strict';

angular.module('listwinners', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listwinners', {
    templateUrl: 'listwinners/listwinners.html',
    controller: 'ListWinnersCtrl'
  });
}])

.controller('ListWinnersCtrl', [function() {

}]);