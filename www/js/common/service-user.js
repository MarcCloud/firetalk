/**
 * Created by MarcCloud on 10/20/2014.
 */
(function(){
    "use strict";
    function UserService ($firebaseSimpleLogin,Connections){
        var firebase = new Firebase(Connections.firebase),
            authClient = $firebaseSimpleLogin(firebase);

        return{
            login:login,
            register:register,
            logout:logout,
            user:{}
        };

        function login(user){
            return authClient.$login('password', {
                email: user.email,
                password: user.password
            }).then(function(user) {
                    return user;
            },
            function(error) {
                if (error.code == 'INVALID_EMAIL'||error.code == 'INVALID_PASSWORD'|| error.code == 'INVALID_USER') {
                    alert('user/password mismatch, please check your credentials and try again.')
                } else {
                    alert("Something went wrong");
                }
            });

        }
        function register(user){
           return authClient.$createUser(user.email, user.password).
                then(function(user){
                    return user;
                },function(error){
                    console.log(error);
                })
        }
        function logout(){
            authClient.$logout();
        }
    }
    angular.module('fire-talk')
        .factory('UserService',['$firebaseSimpleLogin','Connections',UserService]);
})()
