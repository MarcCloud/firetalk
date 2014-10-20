/**
 * Created by MarcCloud on 10/19/2014.
 */
(function(){
    "use strict";
    function ChatService(Connections,$firebase){
        return function(roomId){
            var chatRoom = new Firebase(Connections.firebase + '/chatRooms/' + roomId);
            var roomSync = $firebase(chatRoom.child('roomname'));
            var msgsSync = $firebase(chatRoom.child('chatMessages'));

            return {
                roomInfo: getRoomInfo,
                getConversation:getConversation,
                sendMessage: sendMessage
            };
            function getRoomInfo(){
                return roomSync.$asObject();
            }
            function getConversation(){
                return msgsSync.$asArray();
            }
            function sendMessage(message){

            }
        }
    }
    angular.module('fire-talk-chat-room')
        .factory('ChatService',['Connections','$firebase',ChatService]);
})();