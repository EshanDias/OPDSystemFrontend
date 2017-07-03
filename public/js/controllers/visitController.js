var x = angular.module('test',[]);
x.controller('AppCtrl',

    function AppCtrl($scope,$http){
        console.log("hello world from controller");



        $scope.addContact = function(){
            console.log($scope.contact);
            $http.post('/visits', $scope.contact).then(function(response){
                console.log(response);
                // refresh();

            });

        };


    }
)