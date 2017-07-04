const dcs = angular.module('AvailableDoctorList',[]);
var backend = 'http://localhost:8000';

dcs.controller('DoctorsListCtrl',

function opd($scope, $http) {
	console.log("This is DoctorList");


	var refresh = function(){
		var typeOpd = "OPD";
		var typeClinic = "Clinic";
		var as = true;

		$http.get(backend + '/doctors/'+typeOpd+'/'+as).then(function(response){
		console.log("I got data I requested");
		$scope.OpdDoctorsList = response.data;
		//$scope.contact = "";
	});

		$http.get(backend + '/doctors/'+typeClinic+'/'+as).then(function(response){
		console.log("I got data I requested");
		$scope.ClinicDoctorsList = response.data;

		});
	};

	refresh();
});
