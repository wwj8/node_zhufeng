/**
 * Created by Acer on 2015/7/25.
 */
angular.module('appModule').controller('RoomCtrl',function($scope,socket){
    $scope.messages = [];
    socket.on('allMessages',function(messages){
        $scope.messages = messages;
    });
    socket.emit('getAllMessages');
    socket.on('message',function(message){
        $scope.messages.push(message);
    });
});