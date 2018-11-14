const PubSub = {
    publish: function(channel, payload){
        console.log(`publishing on channel ${channel} payload ${payload}`);
        const event = new CustomEvent(channel, {detail: payload});
        document.dispatchEvent(event);

    },
    subscribe: function(channel, callback){
        console.log(`subscribing to channel ${channel}`);
        document.addEventListener(channel, callback);
    }
}

module.exports = PubSub;