/**
 * Created by Naditha on 7/4/2017.
 */
var queuePatientModule = angular.module('queuePatientCtrl', []);
var backend = 'http://localhost:8000';


queuePatientModule.service('queuepatientService', function() {

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








queuePatientModule.controller('QueuePatient', [ '$scope', '$http','queuepatientService', function($scope, $http, queuepatientService) {

    var status = "NotAdded";
    $http.get(backend + '/HIS/patientNotAdd/'+status).then(function (response) {
        console.log(response.data);
        $scope.notaddpatientlist = response.data;
        console.log(response.data);
    });



    $scope.AddQueuePatient = function (details) {
        queuepatientService.setPatientDetails(details);
    }


}]);


queuePatientModule.controller('AddQueuePatient', [ '$scope', '$http','queuepatientService', function($scope, $http, queuepatientService) {

    var id = queuepatientService.getPatientDetails()._id;

    $http.get(backend + '/HIS/patients/' +id).then(function (response) {
        console.log(response.data);
        $scope.addpatientlist2 = [{name: response.data.name,  HIN: response.data.HIN, DOB: response.data.DOB, gender: response.data.gender, NIC: response.data.NIC, address: response.data.address, civilStatus: response.data.civilStatus, phone: response.data.phone }];
    });



}]);