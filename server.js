//加载http
var http = require('http');
var url =require('url');

//通过http模块下的createServer创建并返回一个web服务器对象
var server = http.createServer();

server.on('error',function(err){
    console.log(err);
});

server.on('request',function(req,res){
    res.writeHead(200,'miaov',{
        'content-type':'text/html;charset=utf-8'
    });
    res.write('<h1>hello</h1>');
    res.end();

});

server.listen(8080,'localhost');