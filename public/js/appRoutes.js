// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: '../index.html'
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
        .otherwise('/home', {
            templateUrl: '../views/home.html',
        });
    $locationProvider.html5Mode(true);

}]);