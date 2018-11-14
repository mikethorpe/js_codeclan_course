const PubSub = require("../helpers/pub_sub");
const NumberInputView = function(){

};

NumberInputView.prototype.getNumberSubmitted = function(){
    const numberInput = document.querySelector("#number");
    const numberSubmitted = numberInput.value;
    return numberSubmitted;
}

NumberInputView.prototype.bindEvents = function(){
    const primeCheckerForm = document.querySelector("#prime-checker-form");
    PubSub.subscribe("submit", (event) => {
        event.preventDefault();
        const numberSubmitted = event.target.number.value;
        PubSub.publish("NumberInputView:number-submitted", numberSubmitted);
    })
}

module.exports = NumberInputView;