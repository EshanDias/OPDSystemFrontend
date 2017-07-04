var x = angular.module('drugModule',[]);
var backend = 'http://localhost:8000';

x.service('dragtService', function() {

    var patientDetails;

    var setdrugDetails = function(data) {
        drugDetails = data;
    };
    var getdrugDetails = function() {
        return drugDetails;
    };
    return {
        setdrugDetails : setdrugDetails,
        getdrugDetails : getdrugDetails
    };
});




patientModule.controller('patient', [ '$scope', '$http', 'dragtService', function($scope, $http, dragtService) {
    $scope.addDrug = function (details) {
        dragtService.setdrugDetails(details);
    }
}]);