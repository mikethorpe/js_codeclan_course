const PubSub = require("../helpers/pub_sub");

const ResultView = function(){

}

ResultView.prototype.bindEvents = function(){
    PubSub.subscribe("InstrumentFamilies:instrument-family-selected", (event) => {
        const instrumentFamily = event.detail;
        this.renderResults(instrumentFamily);
    })
}

ResultView.prototype.renderResults = function(instrumentFamily){
    const resultDiv = document.querySelector("#instrument-selected");
    resultDiv.innerHTML = "";
    this.renderFamilyDetails(resultDiv, instrumentFamily);
    this.renderListOfInstruments(resultDiv, instrumentFamily)
}

ResultView.prototype.renderFamilyDetails = function(resultDiv, instrumentFamily){
    const familyNameTitle = document.createElement("h2");
    familyNameTitle.textContent = instrumentFamily.name;
    
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = instrumentFamily.description;

    const instrumentListTitle = document.createElement("h2");
    instrumentListTitle.textContent = "Instruments include:";

    resultDiv.appendChild(familyNameTitle);
    resultDiv.appendChild(descriptionParagraph);
    resultDiv.appendChild(instrumentListTitle);
}

ResultView.prototype.renderListOfInstruments = function(resultDiv, instrumentFamily){
    const instrumentList = document.createElement("ul");
    const instruments = instrumentFamily.instruments;

    instruments.forEach((instrument) => {
        const instrumentListItem = document.createElement("li");
        instrumentListItem.textContent = instrument;
        instrumentList.appendChild(instrumentListItem);
    });

    resultDiv.appendChild(instrumentList);

}

module.exports = ResultView;