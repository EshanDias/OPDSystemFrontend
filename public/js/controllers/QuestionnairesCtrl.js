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

questionnaires.controller('viewQuestionCtrl',[ '$scope', '$http', 'questionService', function($scope, $http, questionService) {

    $scope.questions = [];
    
    $scope.patient = {
        name : questionService.getPatientDetails().name,
        HIN : questionService.getPatientDetails().HIN
    };
    
    $http.get(backend + '/api/question'+questionService.getPatientDetails().HIN).then(function(response) {
        $scope.questions = response.data;
        
    }, function (error) {
        console.log(error);
    });
    

}]);

questionnaires.controller('addRemarksCtrl', ['$scope', '$http', 'questionService', function($scope, $http, questionService) {
    $scope.patient = questionService.getPatientDetails();
    $scope.addRemarks = function() {

        $http.put(backend + '/api/addRemarks', $scope.patient).then(function(data) {
            console.log("remarks added");
        }, function(data) {
            console.log("Error in posting");
        })

    }
}]);