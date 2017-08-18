const chai = require('chai');

function AccountMoney(balance) {
	this._balance = balance;
}

AccountMoney.prototype.printPaymentDetail = function() {
	return "Dinero en Cuenta: $" + this._balance;
};

// ---

function Installment(installmentCount) {
	this._installmentCount = installmentCount;
}

function CreditCard(installment) {
	this._installment = installment;
}

CreditCard.prototype.printPaymentDetail = function() {
	return "Tarjeta de Crédito: $" + 1000;
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
        it("Tengo una orden por 1000 y 1000 de dinero en cuenta. Al imprimir el detalle de pagos se muestra $1000 por dinero en cuenta", () => {
			var order = new Order(1000);

			order.payWith(new AccountMoney(1000));

			chai.assert.equal("Dinero en Cuenta: $1000", order.printPaymentDetail());
        });

        it("Tengo una orden por 1000 y pago con Tarjeta de Credito. Al imprimir el detalle de pagos se muestra $1000 con Tarjeta", () => {
        	var order = new Order(1000);

			order.payWith(new CreditCard(new Installment(2)));

			chai.assert.equal("Tarjeta de Crédito: $1000", order.printPaymentDetail());
        });
    });
});








