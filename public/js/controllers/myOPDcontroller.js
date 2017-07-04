var x = angular.module('myOPD',['PatientController']);
var backend = 'http://localhost:8000';

x.controller('myOPD', function opd($scope, $http, patientService) {
    
	console.log("This is MyOPD");

	var refresh = function(){

        var DoctorName = "Rasitha Ekanayake";

        $http.get(backend + '/myPatients/' +DoctorName).then(function(response){
            //$scope.patientList = "";
            //refresh();
            $scope.patientList = response.data;
        });
	};

	refresh();

    //go to patient overview
    $scope.view = function(data){
        var details =[];
        var hin = data.HIN;

        $http.get(backend + '/patientOverview/' +hin).then(function (response) {
            console.log(response);
            details = [{name: response.data.name,  HIN: response.data.HIN, DOB: response.data.DOB, gender: response.data.gender, NIC: response.data.NIC, address: response.data.address, civilStatus: response.data.civilStatus, phone: response.data.phone }];
            // console.log(details);
    });
        
        patientService.setPatientDetails(details);
        // $http.get(backend + '/patient/' +id).then(function(response){
        //     console.log("controller received data");
        //     console.log(response);
        //     //$scope.patientList = "";
        //     //refresh();
        //     $scope.patient = response;
        // });

    };

    $scope.search = function(HIN){
        console.log("clicked");
        $http.get(backend + '/patients/' +HIN).then(function (response) {

            $scope.patientList = response.data;
        });
    };

}
)