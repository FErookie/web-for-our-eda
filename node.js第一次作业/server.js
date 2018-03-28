var http = require('http');
var url = require('url');
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.inum;
    var sex = queryObj.enum;
/*    var age = queryObj.age;*/
    res.end("服务器收到了表单请求"+name +sex/*+age*/);
});
server.listen(7777,"127.0.0.1");