const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Mike',
        text: 'Wow!',
        createdAt: new Date()
    });

    socket.on('createMessage', (message) => {
        console.log(`Message from ${message.from} || ${message.text}`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});