'use strict';

angular.module('editquest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editquest', {
    templateUrl: 'editquest/editquest.html',
    controller: 'EditQuestCtrl'
  });
}])

.controller('EditQuestCtrl', ['$scope',function($scope) {
        $scope.tinymceOptions = {
            handle_event_callback: function (e) {
                // put logic here for keypress
            }
        };
        function webquest(){
            this.stPrizeQuestion="";
            this.stPrizeAnswer="";
            this.ndPrizeQuestion="";
            this.ndPrizeAnswer="";
            this.gPrizes="";
            this.gRules="";
            this.gSponsors="";
        }

        var wq = new webquest();
        wq.stPrizeQuestion="lorem";
        wq.stPrizeAnswer="opslum";
        wq.ndPrizeQuestion="lorem 2";
        wq.ndPrizeAnswer="opsolum 2";
        wq.gPrizes="the prizes";
        wq.gRules="the rules";
        wq.gSponsors="the sponsors";

}]);