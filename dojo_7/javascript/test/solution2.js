const chai = require('chai');

function AccountMoney(balance) {
	this._balance = balance;
}

AccountMoney.prototype.printPaymentDetail = function(amountToPay) {
	return "Dinero en Cuenta: $" + amountToPay;
};

AccountMoney.prototype.contributeWith = function(remainingAmount) {
	var contribution = Math.min(remainingAmount.amountToPay(), this._balance);
	return remainingAmount.addContribution(contribution);
};

// ---

function Installment(installmentCount) {
	this._installmentCount = installmentCount;
}

Installment.prototype.printDetailForAmount = function(amountToPay) {
	return this._installmentCount + "x $" + this._amount(amountToPay);
};

Installment.prototype._amount = function(amountToPay) {
	return amountToPay/this._installmentCount;
};

// ---

function CreditCard(installment) {
	this._installment = installment || new Installment(1);
}

CreditCard.prototype.contributeWith = function(remainingAmount) {
	return remainingAmount.addContribution(remainingAmount.amountToPay());
};

CreditCard.prototype.printPaymentDetail = function(amountToPay) {
	return "Tarjeta de Crédito: " + this._installment.printDetailForAmount(amountToPay);
};


// ---

function Shipment(cost) {
	this._cost = cost;
}

Shipment.prototype.cost = function() {
	return this._cost;
};

function NoShipment() {

}

NoShipment.prototype.cost = function() {
	return 0;
};

// ---

function RemainingAmount(initialAmount) {
	this._remainingAmount = initialAmount;
}

RemainingAmount.prototype.addContribution = function(contribution) {
	this._remainingAmount = this._remainingAmount - contribution;
	return contribution;
};

RemainingAmount.prototype.amountToPay = function() {
	return this._remainingAmount;
};

// ---

function Order(amount) {
	this._amount = amount;
	this._shipment = new NoShipment();
	this._payments = [];
}

Order.prototype.shipWith = function(shipment) {
	this._shipment = shipment || new NoShipment();
};

Order.prototype.payWith = function(payment) {
	this._payments.push(payment);
};

Order.prototype._totalAmount = function() {
	return this._amount + this._shipment.cost();
};

Order.prototype.printPaymentDetail = function() {
	var details = [];
	var remainingAmount = new RemainingAmount(this._totalAmount());

	for(var i=0; i < this._payments.length; i++) {
		var payment = this._payments[i]; 
		var contribution = payment.contributeWith(remainingAmount);
		details.push(payment.printPaymentDetail(contribution));
	}

	return details.join(" - ");
};



// ---


describe("Dojo 7", () => {
    describe("Dos medios de pago - ", function() {
        it("Tengo una orden por 1000 y 1000 de dinero en cuenta. Al imprimir el detalle de pagos se muestra $1000 por dinero en cuenta", () => {
			var order = new Order(1000);

			order.payWith(new AccountMoney(1000));

			chai.assert.equal("Dinero en Cuenta: $1000", order.printPaymentDetail());
        });

        it("Tengo una orden por 1000 y 3000 de dinero en cuenta. Al imprimir el detalle de pagos se muestra $1000 por dinero en cuenta", () => {
			var order = new Order(1000);

			order.payWith(new AccountMoney(3000));

			chai.assert.equal("Dinero en Cuenta: $1000", order.printPaymentDetail());
        });

        it("Tengo una orden por 1000 y pago con Tarjeta de Credito en 1 cuota. Al imprimir el detalle de pagos se muestra $1000 con Tarjeta en 1 cuota", () => {
        	var order = new Order(1000);

			order.payWith(new CreditCard());

			chai.assert.equal("Tarjeta de Crédito: 1x $1000", order.printPaymentDetail());
        });

        it("Tengo una orden por 1000 y pago con Tarjeta de Credito en 2 cuotas. Al imprimir el detalle de pagos se muestra $500 con Tarjeta en 2 cuotas", () => {
        	var order = new Order(1000);

			order.payWith(new CreditCard(new Installment(2)));

			chai.assert.equal("Tarjeta de Crédito: 2x $500", order.printPaymentDetail());
        });

        it("Tengo una orden por 1000 con 50 de envio y pago con Tarjeta de Credito en 2 cuotas. Al imprimir el detalle de pagos se muestra $500 con Tarjeta en 2 cuotas", () => {
        	var order = new Order(1000);

        	order.shipWith(new Shipment(50))
			order.payWith(new CreditCard(new Installment(2)));

			chai.assert.equal("Tarjeta de Crédito: 2x $525", order.printPaymentDetail());
        });

        it("Tengo una orden por 1000 y pago 100 con dinero en cuenta y el resto con tarjeta. Al imprimir el detalle de pagos se muestra $100 por dinero en cuenta y $900 con Tarjeta en 1 cuota", () => {
			var order = new Order(1000 /* item total */);
			var accountMoneyBalance = 100;
			
			order.payWith(new AccountMoney(accountMoneyBalance));
			order.payWith(new CreditCard());

			chai.assert.equal("Dinero en Cuenta: $100 - Tarjeta de Crédito: 1x $900", order.printPaymentDetail());
        });
    });
});








