import store from '../core/store.js';

const io = require('socket.io-client');

var socket;

function connectToTwitterStream() {
    if (socket && socket.connected) {
        return;
    }

    //socket = io('https://46.188.58.225:2000',{secure:true});
    //socket = io.connect('https://localhost:2443/',{reconnection: true});

    socket = io.connect('https://twitterstream-sergejoggen.rhcloud.com:8443/', { transports: ['websocket', 'polling'], reconnection: false });

    socket.on('connect', function () {
        console.log("connected");
        //socket.emit("message", "some message");
    });
    socket.on('message', function (msg) {
        console.log(msg);
        //context.setState({})
    });
    socket.on('tweet', function (tweet) {
        console.log(tweet);
        store.dispatch({ type: "tweets", tweets: [tweet, ...store.getState().tweets || []] });
        //context.setState({ tweets: [tweet, ...context.state.tweets].splice(0, 10) })
    });

   

}

function changeFeed(options){
 if (options && options.sport) {
              console.log("otions")

        socket.emit('themes', options.sport, function (tweets) {
            // console.log(tweets);
            // console.log(Object.keys(tweets).reduce((p, c) => {
            //     return p.concat(tweets[c]);
            // }, []));
            store.dispatch({
                type: "tweets", tweets: [...Object.keys(tweets).reduce((p, c) => {
                    return p.concat(tweets[c]);
                }, [])].splice(0, 10)
            });
        })
    }
}


module.exports = {changeFeed, connectToTwitterStream }; 