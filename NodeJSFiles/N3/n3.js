var http= require('http');
var url= require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    // var text= url.parse(req.url,true).query;
    res.end();
}).listen(8080);