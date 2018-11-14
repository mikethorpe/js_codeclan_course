const NumberInputView = require("./views/number_input_view");
const PrimeChecker = require("./models/prime_checker");
const ResultView = require("./views/results_view");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  
  const resultView = new ResultView();
  resultView.bindEvents();
  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();
  const numberInputView = new NumberInputView();
  numberInputView.bindEvents();  
});
