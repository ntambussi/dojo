const chai = require('chai');

function AccountMoney(balance) {
	this._balance = balance;
	this._contribution = 0;
}

AccountMoney.prototype.printPaymentDetail = function() {
	return "Dinero en Cuenta: $" + this._contribution;
};

AccountMoney.prototype.contributeWith = function(amountToPay) {
	this._contribution = Math.min(amountToPay, this._balance);
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
	this._contribution = 0;
}

CreditCard.prototype.contributeWith = function(amount) {
	this._contribution = amount;
};

CreditCard.prototype.printPaymentDetail = function() {
	return "Tarjeta de Crédito: " + this._installment.printDetailForAmount(this._contribution);
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

function Order(amount) {
	this._amount = amount;
	this._shipment = new NoShipment();
	this._payments = [];
}

Order.prototype.shipWith = function(shipment) {
	this._shipment = shipment || new NoShipment();
};

Order.prototype.payWith = function(payment) {
	payment.contributeWith(this._totalAmount());
	this._payments.push(payment);
};

Order.prototype._totalAmount = function() {
	return this._amount + this._shipment.cost();
};

Order.prototype.printPaymentDetail = function() {
	var detail = "";

	for(var i=0; i < this._payments.length; i++) {
		detail += this._payments[i].printPaymentDetail();
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
    });
});








