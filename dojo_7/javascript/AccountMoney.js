function AccountMoney(accountBalance) {
    this.accountBalance = accountBalance;
};

AccountMoney.prototype.description = function() {
    return 'Dinero en cuenta';
};

AccountMoney.prototype.amountDesc = function( remain ) {
    return '$' + remain.min( this.accountBalance ).toString();
};

AccountMoney.prototype.contributeToThe = function( remain ) {
    var result = this.description() + ': ' + this.amountDesc( remain );
    remain.substract( this.accountBalance );
    return result;
};

AccountMoney.prototype.greedier = function(paymentOption) {
    return (this.constructor === paymentOption.constructor) ? 
        0 : 
        -1 /* allwas smaller than whatever it's compare with */;
};
module.exports = AccountMoney;
