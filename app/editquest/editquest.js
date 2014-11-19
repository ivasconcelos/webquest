'use strict';

angular.module('editquest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editquest', {
    templateUrl: 'editquest/editquest.html',
    controller: 'EditQuestCtrl'
  });
}])

.controller('EditQuestCtrl', ['$scope','$http',function($scope, $http) {
        $scope.tinymceOptions = {
            handle_event_callback: function (e) {
                // put logic here for keypress
            }
        };
        $scope.facilities=[];
        $scope.webquest={};

        $scope.webquestuntouch={};

        $scope.revert = function(){

            $scope.webquest=angular.copy($scope.webquestuntouch);

        }

        $scope.submit=function(){

            $http.post('http://192.168.1.110:8080/webquest', $scope.webquest).
                success(function(data, status, headers, config) {

                }).
                error(function(data, status, headers, config) {

                    /* REMOVE: TODO*/
                    alert("error");
                });

        }


        $http.get('http://192.168.1.110:8080/webquest/getfacilities').
            success(function(data, status, headers, config) {
                $scope.facilities=data;
            }).
            error(function(data, status, headers, config) {

                /* REMOVE: TODO*/
                alert("error");
            });


        $http.get('http://192.168.1.110:8080/webquest').
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.webquest=data;
                $scope.webquestuntouch= angular.copy(data);

            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });






}]);