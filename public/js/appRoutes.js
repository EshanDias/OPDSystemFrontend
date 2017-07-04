// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: '../views/home.html'
        })
        .when('/home', {
            templateUrl: '../views/home.html',
            controller: 'MainController'
        })
        .when('/addRemarks', {
            templateUrl: '../views/addRemarks.html',
            controller: 'MainController'
        })
        .when('/addQuestionnaires', {
            templateUrl: '../views/addQuestionnaires.html',
            controller: 'addQuestionCtrl'
        })
        .when('/viewQuestionnaires', {
            templateUrl: '../views/viewQuestionnaires.html',
            controller: 'viewQuestionCtrl'
        })
        .when('/patient', {
            templateUrl: '../views/Patientlist.html',
            controller: 'patient'
        })
        .when('/patientOverview', {
            templateUrl: '../views/patientOverview.html',
            controller: 'patientOverview'
        })
        .when('/myQueue', {
            templateUrl: '../views/myQueue.html',
            controller: 'myQueue'
        })
        .when('/myOPD', {
            templateUrl: '../views/myOPD.html',
            controller: 'myOPD'
        })
        .when('/createVisit', {
            templateUrl: '../views/createVisit.html',
            controller: 'AppCtrl'
        })
        .when('/prescribeDrugs', {
            templateUrl: '../views/drug.html',
            controller: 'drugctrl'
        })
        .when('/addDrug', {
            templateUrl: '../views/addDrug.html',
            controller: ''
        })
        .when('/queuePatients', {
        templateUrl: '../views/queuePatients.html',
        controller: 'QueuePatient'
        })

        .when('/addToQueue_patient', {
            templateUrl: '../views/addToQueue_patient.html',
            controller: 'AddQueuePatient'
        })
        .otherwise('/home', {
            templateUrl: '../views/home.html',
        });
    $locationProvider.html5Mode(true);

}]);