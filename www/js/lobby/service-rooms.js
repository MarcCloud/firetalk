/**
 * Created by MarcCloud on 10/18/2014.
 */
(function(){
    'use strict';
    function RoomsService($resource,$firebase,Connections){
        var ref = new Firebase(Connections.firebase+'/chatRooms'),
            sync= $firebase(ref);
        return {
            getRooms: getRooms,
            createRoom:createRoom,
            removeRoom:removeRoom
        };

        function getRooms(){
            return sync.$asArray();
        }
        function createRoom(name){
            sync.$push({
                createdby: $rootScope.user.name,
                roomname: $scope.roomName,
                createddate: Date.now()
            });
        }
        function removeRoom(roomId){
            sync.$remove(roomId);
        }

        //return $resource(Connections.firebase+'/chatRooms');
    }
    angular.module('fire-talk-lobby').factory('RoomsService',['$resource','$firebase','Connections',RoomsService])
})()