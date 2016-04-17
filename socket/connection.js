module.exports = function( io ){

  io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    /* broadcast to all the other connections on this socket */
    socket.on('chat', function (msg) {
      socket.emit('chat', '寶寶說：'+msg);
    });

  });
};
