function Installment(cuote) {
    this.cuote = cuote;
};

Installment.prototype.cuoteAmount = function( remain ) {
    return remain.divide$(this.cuote); 
};

Installment.prototype.couteDesc = function( remain ) {
    return this.cuoteAmount( remain ).toFixed(0);
};

Installment.prototype.contributeToThe = function( remain ) {
    return this.cuote.toString() + 
        ' x $' + 
        this.couteDesc( remain );
};

module.exports = Installment;
