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
  'ui.bootstrap',
    'ngTable'

]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/editquest'});
}]).controller('navCtrl',function($scope,$location){

        $scope.isActive=function(path){

            if ($location.path()==path){
                return "active"
            }
            return ""
        }

    }).filter('range', function() {
        return function(input, min, max) {
            min = parseInt(min); //Make string input int
            max = parseInt(max);
            for (var i=min; i<max; i++)
                input.push(i);
            return input;
        };
    });