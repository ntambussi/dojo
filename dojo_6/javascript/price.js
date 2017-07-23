module.exports = Price;

function Price(value) {
    this.value = value;
};

Price.prototype.getValue = function() {
    return this.value;
};
