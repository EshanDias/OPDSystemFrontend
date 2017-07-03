var questionnaires = angular.module('QuestionnairesCtrl', ['PatientController']); 
var backend = 'http://localhost:8000';

questionnaires.service('questionService', function(patientService) {

    this.getPatientDetails = function() {
        return patientService.getPatientDetails();
    };
});

questionnaires.controller('addQuestionCtrl',[ '$scope', '$http', 'questionService', function($scope, $http, questionService) {
    console.log("controller works");
    
    console.log( questionService.getPatientDetails().HIN);
    $scope.patient = {
        date : new Date(),
        HIN : questionService.getPatientDetails().HIN,
        name : questionService.getPatientDetails().name
    };
    
    $scope.submit = function() {
        console.log($scope.patient);
        $http.post(backend + '/api/question', $scope.patient).then(function(data) {
            $scope.alert = "Data is sent succellfully";
            console.log("Successfully posted");
        }, function(data) {
            console.log("Error in posting");
        })
    };

}]);

questionnaires.controller('viewQuestionCtrl',[ '$scope', '$http', function($scope, $http) {

    $scope.questions = [];
    // console.log("start : " + $scope.statdate + " end : " + $scope.enddate);
    $scope.search = function(){
    // var id = $scope.patient.HIN;
    if($scope.patient.HIN == null)
    {
        $http.get(backend + '/api/question').then(function(response) {
            console.log("I got all the questions of pateient bla bla");
            console.log(response.data);
            $scope.questions = response.data;
            
        }, function (error) {
            console.log("I could not get the questions of patient bla bla");
        })
    }
    else {
        $http.get(backend + '/api/question/id='+$scope.patient.HIN).then(function(response) {
            console.log("I got all the questions of selected pateient");
            console.log(response.data);
            $scope.questions = response.data;
            
        }, function (error) {
            console.log("I could not get the questions of patient bla bla");
        })
    }
    }

}]);
