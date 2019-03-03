const PubSub = require('../helpers/pub_sub.js');

class InstrumentFamilies {
  constructor(data) {
    this.data = data;
  }
}

InstrumentFamilies.prototype.bindEvents = function () {
  return PubSub.publish('InstrumentFamilies:data-ready', this.data);

  return PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    return this.publishFamilyDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishFamilyDetail = function (selectedIndex) {
  const selectedFamily = this.data[selectedIndex];
  return PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
};

module.exports = InstrumentFamilies;
