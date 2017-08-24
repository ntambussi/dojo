const chai = require('chai');
const SpreadSheet = require('../spreadSheet.js');

var sheet;

describe("solution", () => {
    beforeEach(() => {
        sheet = new SpreadSheet();
    });

    describe("sheet", () => {
        describe("cells", () => {
            it("should populate two cells with numeric values and response the stored values", () => {

                // A-A-A
                // Arrange - Act - Assert

                sheet.setValue("a1", 1);
                sheet.setValue("a2", 2);

                chai.expect( sheet.get("a1") )
                    .to.be.eql(1);
                chai.expect( sheet.get("a2") )
                    .to.be.eql(2);
            });

            it.skip("should polulate cells with a label and a value and response the stored values", () => {

                sheet.setLabel("a1", "Valor: ");

                chai.expect( sheet.get("a1") )
                    .to.be.eql("Valor:");
                chai.expect( sheet.get("a2") )
                    .to.be.eql(2);
            });

            it.skip("should store values and update values references", () => {

                sheet.setValue("a1",1);
                //sheet.set...("a2","=id(a1)");

                chai.expect( sheet.get("a1") )
                    .to.be.eql(1);
                chai.expect( sheet.get("a2") )
                    .to.be.eql(1);
            });

            it.skip("should response summatory", () => {

                // ... 
                // Code here!
                // ... 

                chai.expect( sheet.get("a3") )
                    .to.be.eql(3);

                sheet.setValue("a2", 9);

                chai.expect(10)
                    .to.be.eql( sheet.get("a3") );
            });

            it.skip("should response summatory - broken range", () => {

                // ... 
                // Code here!
                // ... 

                chai.expect( sheet.get("a3") )
                    .to.be.eql(3);
                sheet.set("a2", 9);
                chai.expect( sheet.get("a3") )
                    .to.be.eql(10);
            });
        });
    });

});
