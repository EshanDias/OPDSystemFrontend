var addques = angular.module('QuestionnairesCtrl', []);
var backend = 'http://localhost:8000';

addques.controller('addQuestionCtrl',[ '$scope', '$http', function($scope, $http) {
    console.log("controller works");
    $scope.patient = {
        date : new Date()
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

addques.controller('viewQuestionCtrl',[ '$scope', '$http', function($scope, $http) {

    $scope.questions = [];

    // console.log("start : " + $scope.statdate + " end : " + $scope.enddate);
    $scope.search = function(){
    // var id = $scope.patient.HIN;
    $http.get(backend + '/api/question').then(function(response) {
        console.log("I got all the questions of pateient bla bla");
        console.log(response.data);
        $scope.questions = response.data;
        
    }, function (error) {
        console.log("I could not get the questions of patient bla bla");
    })
    }

}]);
