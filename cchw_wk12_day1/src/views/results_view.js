const PubSub = require("../helpers/pub_sub");

const ResultView = function() {

}

ResultView.prototype.displayResult = function(result){
    const resultElement = document.querySelector("#result");
    resultElement.textContent = this.generateResultString(result);
}

ResultView.prototype.generateResultString = function(result){
    
    if (result) {
        return  `The number is prime`;
    }
    return `The number is not prime`;
}

ResultView.prototype.bindEvents = function(){
    PubSub.subscribe("PrimeChecker:result-calculated", (event) => {
        const result = event.detail;
        this.displayResult(result);
    })
}

module.exports = ResultView;
