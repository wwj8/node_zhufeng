
var http=require('http');
var fs=require('fs');
var waiter=function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end('欢迎光临');
}
var server=http.createServer(waiter);

server.listen(8000,'localhost');