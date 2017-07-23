module.exports = Cost;

function Cost(value) {
    this.value = value;
};

Cost.prototype.absDiff = function( aCostOrPrice ) {
    return Math.abs(this.value - aCostOrPrice.getValue() );

};

