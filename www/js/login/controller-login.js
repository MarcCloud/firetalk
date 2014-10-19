(function(){
	'use strict';
	function LoginCtrl($rootScope,$state,$firebaseSimpleLogin,Connections){
        var self = this,
            firebase = new Firebase(Connections.firebase),
            authClient = $firebaseSimpleLogin(firebase);
        self.enter =  login
        $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
            if (user) {
                $state.go('lobby');
            }
        });
        function login(){
            authClient.$login('password', {
                email: self.user.email,
                password: self.user.password
            }).then(function(user) {
                    $state.go('lobby');
                },
                function(error) {
                    if (error.code == 'INVALID_EMAIL') {
                        alert('Please enter a valid email address');
                    } else if (error.code == 'INVALID_PASSWORD' || error.code == 'INVALID_USER') {
                        alert('Invalid Email or Password');
                    } else {
                        alert("Something went wrong");
                    }
                });
        }

    }

    angular.module('fire-talk-login')
		.controller('LoginCtrl',['$rootScope','$state','$firebaseSimpleLogin','Connections',LoginCtrl]);
})();