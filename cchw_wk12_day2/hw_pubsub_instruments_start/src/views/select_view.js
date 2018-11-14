const PubSub = require("../helpers/pub_sub");

const SelectView = function(element){
    this.element = element
};

SelectView.prototype.bindEvents = function(){
    PubSub.subscribe("InstrumentFamilies:instruments-ready", (event) => {
        const instrumentFamilies = event.detail;
        this.populateSelect(instrumentFamilies);
    });  

};

SelectView.prototype.populateSelect = function(instrumentFamilies){
    
    instrumentFamilies.forEach((family, index) => {
        const option = document.createElement("option");
        option.textContent = family.name;
        option.value = index;
        this.element.appendChild(option);
    });

    this.element.addEventListener("change", (event) =>{
        const instrumentFamilyIndex = event.target.value;
        PubSub.publish("SelectView:selected-instrument-family-changed", instrumentFamilyIndex);
    })
    
};

module.exports = SelectView;