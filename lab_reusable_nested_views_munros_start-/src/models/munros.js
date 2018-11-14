const RequestHelper = require('../helpers/request_helper');
const PubSub = require('../helpers/pub_sub');
const Munros = function(){
    this.munrosData = null;
}

Munros.prototype.getData = function(){
    const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
    requestHelper.get( (data) => {
        this.munrosData = data;
        // console.log(data);
        
        PubSub.publish('Munros:all-munros-data', this.munrosData);
    });
}

module.exports = Munros;