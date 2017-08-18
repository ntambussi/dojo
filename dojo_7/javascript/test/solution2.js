const chai = require('chai');

function AccountMoney(balance) {
	this._balance = balance;
}

AccountMoney.prototype.printPaymentDetail = function() {
	return "Dinero en Cuenta: $" + this._balance;
};

// ---

function Order(amount) {
	this._amount = amount;
	this._paymentMethods = [];
}

Order.prototype.payWith = function(paymentMethod) {
	this._paymentMethods.push(paymentMethod);
};

Order.prototype.printPaymentDetail = function() {
	var detail = "";

	for(var i=0; i < this._paymentMethods.length; i++) {
		detail += this._paymentMethods[i].printPaymentDetail();
	}
	return detail;
};



// ---


describe("Dojo 7", () => {
    describe("Dos medios de pago - ", function() {
        it("Tengo una orden por 1000 y 1000 de dinero en cuenta. El monto final es 1000 y queda 1000 pagado con DC.", () => {
			var order = new Order(1000);

			order.payWith(new AccountMoney(1000));

			chai.assert.equal("Dinero en Cuenta: $1000", order.printPaymentDetail());
        });

        it.skip("Tengo una orden por 1000 y 3000 de dinero en cuenta. El monto final es 1000 y queda 1000 pagado con DC.", () => {
        	
        });

        it.skip("Tengo una orden por 1000 y quiero pagar 1000 con tarjeta con 10% de interes. El monto final es 1100.", () => {
        	
        });
    });
});



