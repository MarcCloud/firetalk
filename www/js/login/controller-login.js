(function(){
	'use strict';
	function LoginCtrl($rootScope,$state,UserService){
        var self = this;
        self.enter = login;
        self.register = goToSignup;

        function login(){
            UserService.login(self.user).then(function(){
                alert("User logged in")
            });
        }

        function goToSignup(){
            $state.go('signup');
        }

        $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
            if (user) {
                UserService.user=user;
                $state.go('lobby');
            }
        });
    }

    angular.module('fire-talk-login')
		.controller('LoginCtrl',['$rootScope','$state','UserService',LoginCtrl]);
})();