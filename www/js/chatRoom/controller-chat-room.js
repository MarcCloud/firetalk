/**
 * Created by MarcCloud on 10/19/2014.
 */
(function(){
    "use strict";
    function ChatCtrl($stateParams,$firebase,Connections,ChatService){
        var self = this;
        var chatService = new ChatService($stateParams.chatId);
        chatService.roomInfo().$loaded().then(function(data){
            self.roomName =data.$value;
        });
        self.conversation = chatService.getConversation();
    }
    angular.module('fire-talk-chat-room')
        .controller('ChatCtrl',['$stateParams','$firebase','Connections','ChatService',ChatCtrl]);

})();