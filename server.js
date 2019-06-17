const port = 8080;
const express = require('express');

const app = express();
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const io = require('socket.io')(server);

const serveStatic = require('serve-static');
app.use(serveStatic(__dirname + '/dist'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let messages = [{from: "bot", msg: "Начните общение!"}];

io.on('connection', ws => {
    console.log("Connection " + ws.id);
    ws.on('message', msg => {
        messages.push(msg);
        io.sockets.emit('smessage', messages);
    });
    ws.on('error', err => {
        console.log(err)
    });
    ws.on('new', msg => {
        console.log(`new user: ${msg.user}`);
        io.sockets.emit('smessage', messages)
    });
});

module.exports = app;
