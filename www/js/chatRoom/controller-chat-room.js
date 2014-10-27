/**
 * Created by MarcCloud on 10/19/2014.
 */
(function(){
    "use strict";
    function ChatCtrl($stateParams,ChatService,UserService){
        var self = this;
        var chatService = new ChatService($stateParams.chatId);
        chatService.roomInfo().$loaded().then(function(data){
            self.roomName =data.$value;
        });
        self.conversation = chatService.getConversation();
        self.user = UserService.user;
        self.sendMessage=sendMessage;
        self.newMessage='';

        function sendMessage(){
            chatService.sendMessage({postedby: UserService.user.email,message: self.newMessage, posteddate: Date.now()})
                .then(function(data){
                    console.log(data)
                });
        }
    }
    angular.module('fire-talk-chat-room')
        .controller('ChatCtrl',['$stateParams','ChatService','UserService',ChatCtrl]);

})();