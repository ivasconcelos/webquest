'use strict';

angular.module('listwinners', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listwinners', {
    templateUrl: 'listwinners/listwinners.html',
    controller: 'ListWinnersCtrl'
  });
}])

.controller('ListWinnersCtrl', ['$scope', function($scope) {

        function Winners(){
            this.id=0;
            this.name="";
            this.phone="";
            this.email="";
            this.prizeDate="";
        }

        var winner1 = new Winners();
        winner1.id=1;
        winner1.name="ana";
        winner1.phone="915874589";
        winner1.email="ana@gmail.com";
        winner1.prizeDate=Date();

        var winner2 = new Winners();
        winner2.id=2;
        winner2.name="joana";
        winner2.phone="968958955";
        winner2.email="joana@gmail.com";
        winner2.prizeDate=Date();

        var winner3 = new Winners();
        winner3.id=3;
        winner3.name="joadfna";
        winner3.phone="98858955";
        winner3.email="josdfana@gmail.com";
        winner3.prizeDate=Date();


        $scope.winners= [winner1, winner2, winner3];




}]);