/**
 * Created by MarcCloud on 10/18/2014.
 */
(function(){
    "use strict";
    function LobbyCtrl($state,RoomsService){
        var self = this;
        self.rooms = RoomsService.getRooms();

        self.joinRoom = joinRoom;

        function joinRoom(room){
            $state.go('chat',{chatId:self.rooms[room].$id});
        }
    }
    angular.module('fire-talk-lobby').controller('LobbyCtrl',['$state','RoomsService',LobbyCtrl])
})();