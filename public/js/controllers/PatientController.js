var patientModule = angular.module('PatientController', []);
var backend = 'http://localhost:8000';

patientModule.service('patientService', function() {

    var patientDetails;

    var setPatientDetails = function(data) {
        patientDetails = data;
    };
    var getPatientDetails = function() {
        return patientDetails;
    };
    return {
        setPatientDetails : setPatientDetails,
        getPatientDetails : getPatientDetails 
    }; 
});

patientModule.controller('patient', [ '$scope', '$http', 'patientService', function($scope, $http, patientService) {
    console.log('works');
    $scope.patientlist = [];

    $http.get(backend + '/HIS/patient').then(function (response) {
                $scope.patientlist = response.data;
    });

    var refresh = function () {

        $http.get(backend + '/HIS/patient').then(function (response) {
            $scope.patientlist = response.data;
        });
    };

    //refresh();

    $scope.addpatient = function () {
        $http.post(backend + '/HIS/patient',$scope.patient);
        refresh();
    }

    $scope.removePatient = function (id) {
        $http.delete(backend + '/HIS/patient/'+id);
        refresh();
    }


    $scope.edit = function (id) {
            console.log(id);
        $http.get(backend + '/HIS/patients/' +id).then(function (respose) {
            $scope.patient = respose.data;
        })
    }


    $scope.updatepatient = function (id) {
        console.log(id);
        $http.put(backend + '/HIS/patient/' +id , $scope.patient);
        refresh();
    }


    $scope.searchByHin = function(hin){
        $http.get(backend + '/HIS/patient/' +hin).then(function (respose) {
            $scope.patientlist = respose.data;
        })
    }

    $scope.overview = function (details) {
        patientService.setPatientDetails(details);
    }
    

}]);

patientModule.controller('patientOverview', ['$scope', '$http', 'patientService', function($scope, $http, patientService) {

    if (patientService.getPatientDetails() != null){
        var id = patientService.getPatientDetails()._id;
    }

    $http.get(backend + '/HIS/patients/' +id).then(function (response) {
            $scope.patientlist2 = [{name: response.data.name,  HIN: response.data.HIN, DOB: response.data.DOB, gender: response.data.gender, NIC: response.data.NIC, address: response.data.address, civilStatus: response.data.civilStatus, phone: response.data.phone }];
    });

}]);