const InstrumentFamilies = require("./models/instrument_families");
const SelectView = require("./views/select_view");
const ResultView = require("./views/result_view");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  
  const resultView = new ResultView();
  resultView.bindEvents();

  const dropdown = document.querySelector("#instrument-families");
  const instrumentFamilyDropdown = new SelectView(dropdown);
  instrumentFamilyDropdown.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();
  
});
