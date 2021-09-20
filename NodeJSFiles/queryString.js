var http = require('http');
var url= require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var que= url.parse(req.url,true).query;
    var text= que.year+"    "+que.month;
    res.end(text);
}).listen(8080);