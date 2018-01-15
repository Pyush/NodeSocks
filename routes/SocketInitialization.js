import socket_io from 'socket.io';

// Socket.io
var io = socket_io();

export default function () {

    io.on('connection', function(socket){
        socket.on('chat message', function(msg){
            io.emit('chat message', msg);
            console.log(msg);
        });
    });

    return io;
}