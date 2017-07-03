var patientModule = angular.module('PatientController', []);
var backend = 'http://localhost:8000';
//var id;
patientModule.controller('patient', [ '$scope', '$http', function($scope, $http) {
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
        console.log(id);
  //      this.id = id;
        $http.get(backend + '/HIS/patients/' +id).then(function (response) {
            console.log(response.data);
            $scope.patientlist = response;
            console.log(response.data._id);
        })
    }




}]);

// patientModule.service('myservice', function() {
//       this.xxx = "yyy";
//     });

// patientModule.controller('patientOverview', [ '$scope', '$http', function($scope, $http) {

//     $scope.patientlist = [];
    
//     $scope.overview = function (id) {
//         console.log(id);
//         $http.get(backend + '/HIS/patients/' +id).then(function (response) {
//             console.log(response.data);
//             $scope.patientlist = response;
//             console.log(response.data._id);
//         })
//     }


// }]);