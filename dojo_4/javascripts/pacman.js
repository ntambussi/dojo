const Weight = require('./weight');

function Pacman(weightUnits) {
  this._weight = new Weight(weightUnits);
}

Pacman.prototype.eat = function(food){
  //this._weight.add(food);
  food.addWeight(this._weight);
};

Pacman.prototype.getWeight = function(){
  return this._weight.getWeight();
};

Pacman.prototype.isFatterThan = function (thisWeight) {
  return this.getWeight() > thisWeight;
};

Pacman.prototype.isTwoTimesFatterThan = function (thisWeight) {
  return this.getWeight() === thisWeight * 2;
};

// Expose
module.exports = Pacman;
