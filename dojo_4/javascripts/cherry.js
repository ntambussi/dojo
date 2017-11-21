function Cherry() {
  // this._unitsWeight = 1
}

Cherry.prototype.addWeight = function (weight) {
  return weight.duplicate();
};

// Expose
module.exports = Cherry;
