const PubSub = require('../helpers/pub_sub.js');

class InstrumentFamilies {
  constructor(data) {
    this.data = data;
  }
}

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('InstrumentFamilies:data-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishFamilyDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishFamilyDetail = function (selectedIndex) {
  const selectedFamily = this.data[selectedIndex];
  PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
};


// // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

module.exports = InstrumentFamilies;
