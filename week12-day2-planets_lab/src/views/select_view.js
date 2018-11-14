const PubSub = require('../helpers/pub_sub.js');

const SelectView = function () {

}

SelectView.prototype.bindEvents = function() {
    const planetListItems = document.querySelectorAll('.planet-menu-item');

    planetListItems.forEach((planetListItem) => {
        // console.log(planetListItem.textContent);
        planetListItem.addEventListener('click', () => {
            PubSub.publish('SelectView:planet_selected', planetListItem);
        });
    })
}

module.exports = SelectView;