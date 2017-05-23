// public/js/services/UsersService.js
angular.module('UsersService', []).factory('Users', ['$http', function($http) {

    return {
        // call to get all Userss
        get : function() {
            return $http.get('/api/Users');
        },

                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new Users
        create : function(UsersData) {
            return $http.post('/api/Users', UsersData);
        },

        // call to DELETE a Users
        delete : function(id) {
            return $http.delete('/api/Users/' + id);
        }
    }       

}]);
