/**
 * Created by Acer on 2015/7/25.
 */
angular.module('appModule').factory('socket',function($rootScope){
    var socket = io();
    return {
        on:function(event,callback){
            socket.on(event,function(){
                var args = arguments;
                $rootScope.$apply(function(){
                    callback.apply(socket,args);
                });
            });
        },
        emit:function(event,data){
            socket.emit(event,data);
        }
    }
});