const chai = require('chai');

const Pacman = require('../pacman');
const Biscuit = require('../biscuit');
const Cherry = require('../cherry');
//const Weight = require('../weight');

describe("pacman", () => {
    it("should get fat whether it eats biscuits", () => {
        const pacman = new Pacman();
        const oldWeight = pacman.getWeight();
        console.log(oldWeight);
        pacman.eat(new Biscuit());
        console.log(pacman.getWeight());
        chai.assert.isTrue(pacman.isFatterThan(oldWeight));
    });

    it("should get two times fatter when it eats a cherry", () => {
        const pacman = new Pacman();
        const oldWeight = pacman.getWeight();
        pacman.eat(new Cherry());
        chai.assert.isTrue(pacman.isTwoTimesFatterThan(oldWeight));
    });

    it("should create a pacman with an initial weight", () => {
        const pacman = new Pacman(20);
        const actualWeight = pacman.getWeight();
        chai.assert.isFalse(pacman.isFatterThan(actualWeight));
    });

    it.skip("should die whether bumps into phanton", () => {
    });

    it.skip("should weaken phantom whether it eats a pellet", () => {
    });

    it.skip("should kill a weaked phantom when pacman hits it", () => {
    });

});
