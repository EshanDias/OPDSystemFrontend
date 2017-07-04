/**
 * Created by Pooja on 7/2/2017.
 */
var x = angular.module('myQueue',[]);
x.controller('myQueue', function myQueue($scope, $http) {
    console.log("This is MyQueue");

    var refresh = function(){
        var id = "595b06d32a8dbd1d6e378640";

        console.log("refresh function");

        $http.get('/doctor/' +id).then(function(response){
            console.log("controller received data");
            console.log(response);
            console.log(response.data.availability);

            $scope.doctor = response.data;

            if(response.data.availability == true){
                $scope.status = 'Open';
            }
            else if(response.data.availability == false){
                $scope.status = 'On hold';
            }

        });

        $http.get('/doctorQueue/'+id).then(function(response){
            $scope.patientCount = response.data.PQueue.length;
            console.log($scope.patientCount);


        });

    };

    refresh();

    //set status as On Hold when button clicked
    $scope.holdQueue = function(id){
        var id = "595b06d32a8dbd1d6e378640";
        $http.put('/doctors/' +id+ '/hold').then(function(response){


            console.log("holded");
            //$scope.status = 'On hold';
            console.log("after hold clicked=>" + response.data.availability);

        });
        refresh();
    };

    //set status as Open when button clicked
    $scope.resumeQueue = function(id){
        var id = "595b06d32a8dbd1d6e378640";
        $http.put('/doctors/' +id+ '/resume').then(function(response){

            //$scope.status = 'Open';
            console.log("resumed");
            ("after resume clicked=>" + response.data.availability);


        });
        refresh();
    };

});