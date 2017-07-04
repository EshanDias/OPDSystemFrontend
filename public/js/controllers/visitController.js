var x = angular.module('test',['PatientController']);
var backend = 'http://localhost:8000';

x.service('visitService', function(patientService) {

    this.getPatientDetails = function() {
        return patientService.getPatientDetails();
    };
});
x.controller('AppCtrl', function AppCtrl($scope,$http,visitService){

    $scope.patient = [];
    $scope.patient = {
       name : visitService.getPatientDetails().name,
       HIN :  visitService.getPatientDetails().HIN
    }
        console.log("hello world from controller");



        $scope.addpatient = function(){
            console.log($scope.patient);
            $http.post(backend + '/visits', $scope.patient).then(function(response){
                console.log(response);
                // refresh();

            });

        };


    }
)