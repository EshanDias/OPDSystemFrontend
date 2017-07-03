var patientModule = angular.module('PatientController', []);
var backend = 'http://localhost:8000';

patientModule.service('patientService', function() {
    var patientID;

    var setID = function(id) {
        patientID = id;
    };

    var getID = function() {
        return patientID;
    };
    return {
        setID : setID,
        getID : getID
    }; 
});

patientModule.controller('patient', [ '$scope', '$http', 'patientService', function($scope, $http, patientService) {
    console.log('works');
    $scope.patientlist = [];

    $http.get(backend + '/HIS/patient').then(function (response) {
                $scope.patientlist = response.data;
                //$scope.patient = "";
    });

    var refresh = function () {

        $http.get(backend + '/HIS/patient').then(function (response) {
            $scope.patientlist = response.data;
          //  $scope.patient = {};
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
            // $scope.patientlist = {};
            $scope.patientlist = respose.data;
        })
    }

    $scope.overview = function (id) {
        
        patientService.setID(id);
        
    }


}]);

patientModule.controller('patientOverview', ['$scope', '$http', 'patientService', function($scope, $http, patientService) {

    var id = patientService.getID();
    

    $http.get(backend + '/HIS/patients/' +id).then(function (response) {
            $scope.patientlist2 = [{name: response.data.name,  HIN: response.data.HIN, DOB: response.data.DOB, gender: response.data.gender, NIC: response.data.NIC, address: response.data.address, civilStatus: response.data.civilStatus, phone: response.data.phone }];
            console.log(response.data);
    });

}]);