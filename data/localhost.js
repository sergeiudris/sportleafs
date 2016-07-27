const io = require('socket.io-client');
var socket;

function connect(context) {
    if (socket) {
        return;
    }
    console.log("socketing")
    //socket = io('https://46.188.58.225:2000',{secure:true});
    //socket = io.connect('https://localhost:2443/',{reconnection: true});
    socket = io.connect('https://twitterstream-sergejoggen.rhcloud.com:8443/', { transports: ['websocket', 'polling'], reconnection: false });
    socket.on('connect', function () {
        console.log("connected");
        socket.emit("m", "some message");
    });
    socket.on('m', function (data) {
        console.log(data);
    });
}

module.exports = function (context) {
    connect(context);
}