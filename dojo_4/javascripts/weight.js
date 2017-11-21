function Weight(weightUnits) {
  this._units = weightUnits || 0;
}

Weight.prototype.getWeight = function () {
  return this._units;
};

Weight.prototype.incrementOnce = function () {
  return this._units += 1;
};

Weight.prototype.duplicate = function () {
  return this._units *= 2;
};

// Expose
module.exports = Weight;
