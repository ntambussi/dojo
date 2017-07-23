module.exports = Product;

function Product(cost) {
    this.cost = cost;
};

Product.prototype.margin = function( price ) {
    return this.cost.absDiff( price );
};

