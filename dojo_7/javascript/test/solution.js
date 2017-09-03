const chai = require('chai');
const Order = require('../Order.js');
const AccountMoney = require('../AccountMoney.js');
const CreditCard = require('../CreditCard.js');
const Installment = require('../Installment.js');
const CustomShipment = require('../CustomShipment.js');

describe("checkout", () => {

    describe("dummy", function() {

        it("should print payment with account money for an order", () => {

            let order = new Order(1350);

            let accountMoney = new AccountMoney(4000);

            order.payWith(accountMoney);

            chai.assert.equal(order.paymentsDetail(), 'Dinero en cuenta: $1350');
        });

        it("should print payment with credit card and one installment for an order", () => {

            let order = new Order(1350);

            let creditCard = new CreditCard();

            order.payWith(creditCard);

            chai.assert.equal(order.paymentsDetail(), 'Tarjeta de crédito: 1 x $1350');
        });

        it("should print payment with credit card and two installments for an order", () => {

            let order = new Order(1350);

            let creditCard = new CreditCard(new Installment(2));

            order.payWith(creditCard);

            chai.assert.equal(order.paymentsDetail(), 'Tarjeta de crédito: 2 x $675');
        });

        it("should print payment with credit card and two installments for an order with custom shipment", () => {

            let order = new Order(1000, new CustomShipment(350));

            let creditCard = new CreditCard(new Installment(2));

            order.payWith(creditCard);

            chai.assert.equal(order.paymentsDetail(), 'Tarjeta de crédito: 2 x $675');
        });

        it("should pay an order with credit card and account money", () => {

            let order = new Order(1000);

            order.payWith(new AccountMoney(100));
            order.payWith(new CreditCard());

            chai.assert.equal(
                order.paymentsDetail(), 
                'Dinero en cuenta: $100, ' +
                'Tarjeta de crédito: 1 x $900'
            );
        });

        it("should pay an order with credit card and account money then update shipment and it should response the new detail", () => {

            let order = new Order(1000);

            order.payWith(new AccountMoney(100));
            order.payWith(new CreditCard());

            chai.assert.equal(
                order.paymentsDetail(), 
                'Dinero en cuenta: $100, ' +
                'Tarjeta de crédito: 1 x $900'
            );

            order.changeShipment( new CustomShipment(100));
            chai.assert.equal(
                order.paymentsDetail(), 
                'Dinero en cuenta: $100, ' +
                'Tarjeta de crédito: 1 x $1000'
            );
        });

        it("should pay an order with credit card and account money regardless paying order", () => {

            let order = new Order(1000);

            order.payWith(new CreditCard());
            order.payWith(new AccountMoney(100));

            chai.assert.equal(
                order.paymentsDetail(), 
                'Dinero en cuenta: $100, ' +
                'Tarjeta de crédito: 1 x $900'
            );
        });

    });
});
