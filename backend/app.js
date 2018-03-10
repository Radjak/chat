var http = require('http');

var server = http.createServer(function(req, res) {
  res.end();
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
    socket.emit('message', 'Vous êtes bien connecté !');

    socket.on('message', function (message) {
        console.log('Message: ' + message);
        socket.broadcast.emit('message', message);
    });
});

server.listen(8080);
