var http = require('http');
var url = require('url');
var fs = require('fs');
var addition = require('./addition');
var substraction= require('./substraction');
var multiplication= require('./multiplication');
var division= require('./division');



http.createServer(function (req, res) {
var q = url.parse(req.url, true);
var filename = "." + q.pathname;
if (q.pathname=="/add.js")
{
addition.add(req, res, q.query)
}
else if(q.pathname=="/sub.js")
{
substraction.sub(req,res,q.query);
} else if(q.pathname=='./mul.js')
{
    multiplication.mul(req,res,q.query);
}
else
division.div(req,res,q.query);
fs.readFile(filename, function(err, data) {
if (err) {
res.writeHead(404, {'Content-Type': 'text/html'});
return res.end("404 Not Found");
}
res.writeHead(200); // Content-Type not included
res.write(data);
return res.end();
});
}).listen(8080);