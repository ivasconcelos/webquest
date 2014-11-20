'use strict';

angular.module('editquest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editquest', {
    templateUrl: 'editquest/editquest.html',
    controller: 'EditQuestCtrl'
  });
}])

.controller('EditQuestCtrl', ['$scope','$http',function($scope, $http) {

        <!-- WYSIWYG Editor tinymce -->
        $scope.tinymceOptions = {
            handle_event_callback: function (e) {
                // put logic here for keypress
            },
            theme: "modern",

            plugins: [
                "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "save table contextmenu directionality emoticons template paste textcolor"
            ],

            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
            style_formats: [
                {title: 'Bold text', inline: 'b'},
                {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                {title: 'Example 1', inline: 'span', classes: 'example1'},
                {title: 'Example 2', inline: 'span', classes: 'example2'},
                {title: 'Table styles'},
                {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
            ]

        };



        $scope.facilities=[];
        $scope.webquest={};
        $scope.webquestuntouch={};


        /*REVERT BTN Function*/
        $scope.revert = function(){
            $scope.webquest=angular.copy($scope.webquestuntouch);
        }

        /* SUBMIT BTN Function */
        $scope.submit=function(){
            $http.post('http://192.168.1.110:8080/webquest', $scope.webquest).
                success(function(data, status, headers, config) {
                    alert("sucesso");

                }).
                error(function(data, status, headers, config) {
                    /* REMOVE: TODO*/
                    alert("error");
                });
        }

        /*FACILITIES VALUES (To Print in Form Field)*/
        $http.get('http://192.168.1.110:8080/webquest/getfacilities').
            success(function(data, status, headers, config) {
                $scope.facilities=data;
                console.log("FACILITIES "+$scope.facilities)
            }).
            error(function(data, status, headers, config) {
                /* REMOVE: TODO*/
                alert("error");
            });


        /*WEBQUEST FORM VALUES (To Print in Form Fields  )*/
        $http.get('http://192.168.1.110:8080/webquest').
            success(function(data, status, headers, config) {
                $scope.webquest=data;
                $scope.webquestuntouch= angular.copy(data);

            }).
            error(function(data, status, headers, config) {
                /* TODO error*/
                alert("error");
            });


}]);