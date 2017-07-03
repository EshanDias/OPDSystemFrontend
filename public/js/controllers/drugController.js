var x = angular.module('drugModule',[]);
x.controller('drugctrl', function AppCtrl($scope,$http){
        console.log("hello world from controller");



        $scope.addDrug = function(){
            console.log($scope.contact1);
            $http.post('/drugs', $scope.contact1).then(function(response){
                console.log(response);
                refresh();

            });

        };

        // $scope.remove = function(id){
        //     console.log(id);
        //     $http.delete('/visits/' +id).then(function(response){
        //         refresh();
        //     });
        //
        //
        // };

        // $scope.edit = function(id){
        //     console.log(id);
        //     $http.get('/visits/' +id).then(function(response){
        //         $scope.contact = response.data;
        //     });
        //
        // };




    }
)