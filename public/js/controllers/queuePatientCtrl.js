/**
 * Created by Naditha on 7/4/2017.
 */
var queuePatientModule = angular.module('queuePatientCtrl', []);
var backend = 'http://localhost:8000';
queuePatientModule.controller('QueuePatient', [ '$scope', '$http', function($scope, $http) {

    var status = "NotAdded";
    $http.get(backend + '/HIS/patientNotAdd/'+status).then(function (response) {
        console.log(response.data);
        $scope.notaddpatientlist = response.data;
        console.log(response.data);
    });


}]);