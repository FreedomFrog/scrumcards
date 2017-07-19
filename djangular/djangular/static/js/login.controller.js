/**
 * Created by tjaeger on 7/19/2017.
 */
(function() {
    'use strict';

    angular
        .module('scrumboard.demo')
        .controller('LoginController', ['$scope', '$http', '$location', LoginController]);

    function LoginController($scope, $http, $location) {
        $scope.login = function() {
            $http.post('/auth_api/login/', $scope.user)
                .then(function() {
                    $location.url('/');
                },
                function(){
                    $scope.login_error="Invalid username/password combination";
                });
        }
    }
})();