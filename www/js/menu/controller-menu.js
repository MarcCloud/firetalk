/**
 * Created by MarcCloud on 10/26/2014.
 */

(function(){
    'use strict';
    function MenuCtrl($state,UserService){
        var self = this;
        self.logout=logout;

        function logout(){
            UserService.logout();
            $state.go('login');
        }
    }
    angular.module('fire-talk-menu').controller('MenuCtrl',['$state','UserService',MenuCtrl]);
})();