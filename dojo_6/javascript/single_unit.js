module.exports = SingleUnit;


function SingleUnit(product, price) {
    this.product = product;
    this.price = price;
};

SingleUnit.prototype.earned = function() {
    return this.product.margin( this.price );
}

