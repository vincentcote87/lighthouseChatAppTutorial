let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

let io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
});

app.use(express.static('client'));

server.listen(8080, () => {
    console.log('server up');
});