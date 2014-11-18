'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'editquest',
  'listwinners',
  'listplayers',
    'selectwinners',
  'myApp.version',
  'ui.tinymce',
  'ui.bootstrap'

]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/editquest'});
}]);