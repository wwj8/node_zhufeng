/**
 * Created by Acer on 2015/7/25.
 */
angular.module('appModule').controller('MessageCtrl',function($rootScope,$scope,socket){
    $scope.createMessage = function(){
        socket.emit('message',$scope.newMessage);
        $scope.newMessage = '';
    }
});