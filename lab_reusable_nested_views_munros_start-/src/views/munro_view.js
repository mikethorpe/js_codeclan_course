const MunroView = function(munro, container) {
    this.munro = munro;
    this.container = container;
}

MunroView.prototype.render = function(){
    const munroDiv = document.createElement('div');
    const munroName = document.createElement('h3');
    munroName.textContent = this.munro.name;
    munroDiv.appendChild(munroName);
    this.container.appendChild(munroDiv);
    this.renderList(munroDiv)
}

MunroView.prototype.renderList = function(container){
    const listDetails = document.createElement("ul");
    
    const meaning = document.createElement("li");
    meaning.textContent = `Name meaning: ${this.munro.meaning}`;
    listDetails.appendChild(meaning);
    
    const region = document.createElement("li");
    region.textContent = `Region: ${this.munro.region}`;
    listDetails.appendChild(region);

    container.appendChild(listDetails);

}

module.exports = MunroView;