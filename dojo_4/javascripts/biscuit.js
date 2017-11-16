function Biscuit() {
  // this._unitsWeight = 1
}

Biscuit.prototype.addWeight = function (weight) {
  return weight.incrementOnce();
};

// Expose
module.exports = Biscuit;
