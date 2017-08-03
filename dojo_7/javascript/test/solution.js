const chai = require('chai');

function Amount(value) {
	this._value = value;
}

Amount.prototype.addInterest = function(interest) {
	return this._value * (1 + interest);
};

Amount.prototype.equals = function(otherAmount) {
	return this._value == otherAmount._value;
};

Amount.prototype.detail = function() {
	return "" + this._value;
}



function Order(amount) {
	this._amount = amount;
	this._payments = [];
}

Order.prototype.finalAmount = function() {
	return this._amount;
};

Order.prototype.payWith = function(payment) {
	this._payments.push(payment);
};

Order.prototype.detail = function() {
	var detail = "Order: " + this.finalAmount().detail();
	for(var i=0; i<this._payments.length; i++) {
		detail += "\n" + this._payments[i].detail();
	}
	detail += "\n----------\n";
	detail += "Total: " + this.finalAmount().detail();
	return detail;
};




function AccountMoney(availableBalance) {
	this._availableBalance = availableBalance;
}

AccountMoney.prototype.detail = function() {
	return "AM: " + this._availableBalance.detail();
};

AccountMoney.prototype.contribution = function() {
	return this._availableBalance;
};




function CreditCard(interest) {
	this._interest = interest;
}

CreditCard.prototype.finalAmount = function() {
	// body...
};

CreditCard.prototype.contribution = function() {
	// body...
};



// -------------------------------------



describe("Dojo 7", () => {
    describe("Dos medios de pago - ", function() {
        it("Tengo una orden por 1000 y quiero pagar 1000 con dinero en cuenta. El monto final es 1000 y queda 1000 pagado con DC.", () => {
        	// Order..... 1000
        	// DC........ 1000
        	// ---------------
        	// Total..... 1000
        	
        	var order = new Order(new Amount(1000));
        	var accountMoney = new AccountMoney(new Amount(1000));

        	order.payWith(accountMoney);

        	var expectedDetail = 
        	  "Order: 1000\n" 
        	+ "AM: 1000\n"
        	+ "----------\n"
        	+ "Total: 1000";
        	chai.assert.equal(expectedDetail, order.detail());
        	chai.assert.equal(true, new Amount(1000).equals(accountMoney.contribution()));
        });

        it("Tengo una orden por 1000 y quiero pagar 1000 con tarjeta con 10% de interes. El monto final es 1100.", () => {
        	// Order..... 1000
        	// TC 10%.... 1000
        	// ---------------
        	// Total..... 1100

        	var order = new Order(new Amount(1000));
        	var creditCard = new CreditCard(10);
        	
        	order.payWith(creditCard);

			var expectedDetail = 
        	  "Order: 1000\n" 
        	+ "TC: 1000\n"
        	+ "----------\n"
        	+ "Total: 1100";
        	chai.assert.equal(expectedDetail, order.detail());
        	chai.assert.equal(true, new Amount(1000).equals(creditCard.contribution()));
        });
    });
});







