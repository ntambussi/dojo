function Remain(amount) {
    this.amount = amount;
};

Remain.prototype.substract = function( value ) {
    this.amount -= value;
    return this;
};

Remain.prototype.divide$ = function( value ) {
    return new Remain(this.amount / value);
};

Remain.prototype.turnsIntoZero = function() {
    this.amount = 0;
    return this;
};

Remain.prototype.min = function( value ) {
    return Math.min(this.amount, value);
};

Remain.prototype.toFixed = function(precision) {
    return this.amount.toFixed(precision);
};
module.exports = Remain;
