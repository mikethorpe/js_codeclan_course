const PubSub = require('../helpers/pub_sub.js');
const planets = require('../data/planets.js');

const PlanetFinder = function () {

}

PlanetFinder.prototype.findPlanet = function (planetId) {
    // console.log(planets);
    let foundPlanet = null;
    planets.forEach((planet) => {
        if (planet.name === planetId) {
            foundPlanet = planet;
        }
    })
    return foundPlanet;
}

PlanetFinder.prototype.bindEvents = function() {
    PubSub.subscribe('SelectView:planet_selected', (event) => {
        const selectedPlanetListItem = event.detail;
        const planetId = selectedPlanetListItem.id;
        // console.log(planetId);
        const foundPlanet = this.findPlanet(planetId);
        // console.log(foundPlanet);
        PubSub.publish('PlanetFinder:found_planet', foundPlanet);
    })
}

module.exports = PlanetFinder;