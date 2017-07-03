var x = angular.module('myOPD',[]);
x.controller('myOPD', function opd($scope, $http) {
    
	console.log("This is MyOPD");

	var refresh = function(){

        var DoctorName = "John";

        $http.get('/myPatients/' +DoctorName).then(function(response){
            console.log("controller received data");
            console.log(response.data);
            //$scope.patientList = "";
            //refresh();
            $scope.patientList = response.data;
        });
	};

	refresh();

    //go to patient overview
    $scope.view = function(id){
        console.log("controller got the patient hin");
        console.log(id);
        $http.get('/patient/' +id).then(function(response){
            console.log("controller received data");
            console.log(response);
            //$scope.patientList = "";
            //refresh();
            $scope.patient = response;
        });

    };

    $scope.search = function(HIN){
        console.log("clicked");
        $http.get('/patients/' +HIN).then(function (response) {

            $scope.patientList = response.data;
        });
    };

}
)