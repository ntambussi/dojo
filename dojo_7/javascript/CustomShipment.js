function CustomShipment(amount) {
    this.amount = amount;
};

CustomShipment.prototype.plus = function(value) {
    return value + this.amount;
};

module.exports = CustomShipment;
