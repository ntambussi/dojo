const chai = require('chai');
const AccountMoney = require('../AccountMoney.js');
const CreditCard = require('../CreditCard.js');

describe("comparison", () => {


    it("credit card is smaller than account momey", () => {
        let accountMoney = new AccountMoney(100);
        let creditCard = new CreditCard();

        chai.assert.equal(accountMoney.greedier( creditCard ), -1);
    });

    it("account money is bigger than credit card", () => {
        let accountMoney = new AccountMoney(100);
        let creditCard = new CreditCard();

        chai.assert.equal(creditCard.greedier( accountMoney ), 1);
    });

    it("account money is equal to account money", () => {
        let accountMoney = new AccountMoney(100);

        chai.assert.equal(accountMoney.greedier( accountMoney ), 0);
    });

    it("credit card is equal to credit card", () => {
        let creditCard = new CreditCard();

        chai.assert.equal(creditCard.greedier( creditCard ), 0);
    });


});
