/**
 * Created by MarcCloud on 10/26/2014.
 */
(function(){
    'use strict';
    function SignupCtrl($state,UserService){
        var self=this;
        self.submit=submit;

        function submit(){
            UserService.register(self.user).then(function(data){
                $state.go('login');
            });
        }
    }
    angular.module('fire-talk-signup').controller('SignupCtrl',['$state','UserService',SignupCtrl]);
})();