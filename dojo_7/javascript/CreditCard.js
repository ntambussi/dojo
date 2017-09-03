const Installment = require('./Installment.js');

function CreditCard(installment) {
    this.installment = installment || new Installment(1);
};

CreditCard.prototype.description = function() {
    return 'Tarjeta de crédito';
};

CreditCard.prototype.installmentForThe = function( remain ) {
    return this.installment.contributeToThe( remain );
};

CreditCard.prototype.contributeToThe = function( remain ) {
    var result = this.description() + ': ' + this.installmentForThe( remain );

    remain.turnsIntoZero();

    return result;
};

CreditCard.prototype.greedier = function(paymentOption) {
    return (this.constructor === paymentOption.constructor) ? 
        0 : 
        1 /* allwas bigger than whatever it's compare with */;
};

module.exports = CreditCard;
