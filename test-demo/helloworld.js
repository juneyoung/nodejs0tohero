var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end('Hello, node!\n');
}).listen(1337, '127.0.0.1');

console.log('server running at 127.0.0.1:1337...')

//modules.export(http);
