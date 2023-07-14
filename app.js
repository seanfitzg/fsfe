const http = require('http');

http.createServer(function (req, res) {
	res.write('on the way to elliot and his lair');
	res.end();
}
).listen(3000);

console.log('Server started');
