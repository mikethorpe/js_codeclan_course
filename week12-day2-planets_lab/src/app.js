const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');
const PlanetFinder = require('./models/planet_finder.js');
const PlanetInfoView = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  const selectView = new SelectView();
  selectView.bindEvents();

  const planetFinder = new PlanetFinder();
  planetFinder.bindEvents();

  const planetInfoView = new PlanetInfoView();
  planetInfoView.bindEvents();
});
