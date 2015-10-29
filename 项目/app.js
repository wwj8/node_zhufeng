/**
 * Created by Acer on 2015/7/25.
 */
var express=require('express');
var path=require('path');
var app=express();
app.use(express.static(path.join(__dirname,'frontjiang')));
app.use(function(req,res){
    res.sendFile(path.join(__dirname,'frontjiang','index.html'));
});
var server=app.listen(8080);
var io=require('socket.io').listen(server);
io.on('connection',function(socket){
    socket.emit('message','hello client');
    socket.on('message',function(message){
        console.log(message);
    })
});