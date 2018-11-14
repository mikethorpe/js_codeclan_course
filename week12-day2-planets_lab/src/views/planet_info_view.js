// const planets = require('../data/planets.js');
const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function () {

}

PlanetInfoView.prototype.generateInfo = function (planet) {
    const planetKeys = Object.keys(planet);
    const planetDetailsList = document.createElement('ul');

    planetKeys.forEach((key) => {
        if (key !== 'image') {
            const newLi = document.createElement('li');
            newLi.textContent = `${key}: ${planet[key]}`;
            planetDetailsList.appendChild(newLi);
        }
    });

    return planetDetailsList;

}

PlanetInfoView.prototype.generateImage = function (planet) {
    const imagePath = planet.image;
    // const newImg = document.createElement('img');
    // newImg.src = imagePath;
    const backgroundStyle = document.createElement('style');
    backgroundStyle.className = 'background-style';
    backgroundStyle.textContent = `body {
        background-image: url("${imagePath}");
        background-size: cover;
        background-repeat: no-repeat;
     }`

     return backgroundStyle;
    // return newImg;
}

PlanetInfoView.prototype.bindEvents = function () {
    PubSub.subscribe('PlanetFinder:found_planet', (event) => {
        const foundPlanet = event.detail;
        const planetDetailsSection = document.querySelector('.planet-details');

        planetDetailsSection.innerHTML = '';
        
        const planetInfoList = this.generateInfo(foundPlanet);
        // const planetImage = this.generateImage(foundPlanet);
        const planetBackground = this.generateImage(foundPlanet);

        planetDetailsSection.appendChild(planetInfoList);
        // planetDetailsSection.appendChild(planetImage);

        // planetBackground.innerHTML = '';
        const body = document.querySelector('body');
        const planetBackgroundStyle = document.querySelector('.background-style');
        if (planetBackgroundStyle != undefined) {
            body.removeChild(planetBackgroundStyle);
        } 
        body.appendChild(planetBackground);

    })
}

module.exports = PlanetInfoView;