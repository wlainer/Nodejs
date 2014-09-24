angular
   .module('myApp')
   .factory('Server', Server);

Server.$inject = ['$http'];

function Server($http) {
    return {
        get: function(url) {
            return $http.get(url);
        },
        post: function(url) {
            return $http.post(url);
        }
    };
}