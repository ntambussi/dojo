const NoShipment = require('./NoShipment.js');
const Remain = require('./Remain.js');

function Order(itemTimeQuantity, shipment) {
    this.itemTimeQuantity = itemTimeQuantity;
    this.shipment = shipment || new NoShipment();
    this.paymentMethods = [];
};

Order.prototype.totalAmount = function() {
    return this.shipment.plus( this.itemTimeQuantity );
};

Order.prototype.changeShipment = function( shipment ) {
    this.shipment = shipment;
};

Order.prototype.payWith = function(paymentMethod) {
    this.paymentMethods.push(paymentMethod); 
};

Order.prototype.sortedPaymentMethods = function() {
    return this.paymentMethods.sort( (p,q) => p.greedier(q));
};

Order.prototype.paymentsDetail = function() {
    var remain = new Remain( this.totalAmount() );

    var contributions = this.sortedPaymentMethods().map( 
        p => p.contributeToThe( remain ) 
    );

    return contributions.join(', ');
};

module.exports = Order;
