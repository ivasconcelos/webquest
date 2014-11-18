'use strict';

angular.module('listplayers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listplayers', {
    templateUrl: 'listplayers/listplayers.html',
    controller: 'ListPlayersCtrl'
  });
}])

.controller('ListPlayersCtrl', [function() {

}]);