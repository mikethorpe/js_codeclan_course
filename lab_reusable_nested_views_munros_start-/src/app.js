const Munros = require('./models/munros');
const MunrosListView = require('./views/munros_list_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munrosListView = new MunrosListView();
  munrosListView.bindEvents();
  
  const munros = new Munros();
  munros.getData();

})
