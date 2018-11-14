const PubSub = require('../helpers/pub_sub');
const MunroView = require('./munro_view');

const MunrosListView = function(){
    this.munrosData = null;
}

MunrosListView.prototype.bindEvents = function(){
    PubSub.subscribe('Munros:all-munros-data', (event) => {
        this.munrosData = event.detail;  
        this.render();       
    });
}

MunrosListView.prototype.render = function(){
    const munrosListDiv = document.querySelector("#munroslist");
    this.munrosData.forEach( (munro) => {
       const munroView = new MunroView(munro, munrosListDiv)
       munroView.render();
    });
}
        

module.exports = MunrosListView;