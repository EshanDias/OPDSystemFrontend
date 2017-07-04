var x = angular.module('drugModule',['PatientController']);
var backend = 'http://localhost:8000';

x.service('drugService', function(patientService) {

    this.getPatientDetails = function() {
        return patientService.getPatientDetails();
    };
});



x.service('dragService', function() {

    var patientDetails;

    var setdrugDetails = function(data) {
        drugDetails = data;
    };
    var getdrugDetails = function() {
        return drugDetails;
    };
    return {
        setdrugDetails : setdrugDetails,
        getdrugDetails : getdrugDetails
    };
});



x.controller('drugctrl', function AppCtrl($scope,$http,drugService,dragService){

    $scope.patient = [];
    $scope.patient = {
        name : drugService.getPatientDetails().name,
        HIN :  drugService.getPatientDetails().HIN,
        DOB :  drugService.getPatientDetails().DOB,
        gender :  drugService.getPatientDetails().gender,
        civilStatus :  drugService.getPatientDetails().civilStatus,
        NIC :  drugService.getPatientDetails().NIC,
        phone :  drugService.getPatientDetails().phone,
        address :  drugService.getPatientDetails().address
    }
        console.log("hello world from controller");



        $scope.addDrug = function(){
            console.log($scope.drug);
            $http.post(backend + '/drugs', $scope.drug).then(function(response){
                dragtService.setdrugDetails(details);
                console.log(response);
                refresh();

            });

        };
    // $scope.addDrug = function (details) {
    //     dragService.setdrugDetails(details);
    // }

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

x.controller('drug', ['$scope', '$http', 'dragService', function($scope, $http, dragService) {

    var id = dragService.getdrugDetails()._id;

    $http.get(backend + '/drugs' +id).then(function (response) {
        $scope.druglist2 = [{name: response.data.drugName,  dose: response.data.dosage, frequency: response.data.frequency, period: response.data.period}];
    });



}])