const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
    console.log(request.method, request.url);
    const text = fs.readFileSync('index.html', 'utf-8');
    response.end(text);
});

server.listen('3000');
console.log('server started!');
