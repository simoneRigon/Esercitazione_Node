var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end("Hello World!")
});

server.listen(1400, '127.0.0.1');

console.log("Server running at 127.0.0.1");