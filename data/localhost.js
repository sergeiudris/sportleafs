const io = require('socket.io-client');
var socket;
function connect(context) {
    if(socket){
        return;
    }
    socket = io('https://46.188.58.225:2000',{secure:true});
    socket.on('msg', function (data) {
        console.log(data);
    });
}

module.exports = function (context) {
    connect(context);
}