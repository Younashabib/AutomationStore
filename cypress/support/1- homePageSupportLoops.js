export class loopsFeatureItems {
  get splitFunctionBlueTop() {
    return cy
      .get('[class="col-sm-4"]')
      .eq(1)
      .contains("Rs. 500")
      .invoke("text")
      .then((text) => {
        const splitText = text.split(" ")[1];
        //expect(splitText).to.equal("500");
        if (splitText < 1000) {
          cy.get('[class="col-sm-4"]').contains("Add to cart").click();
        }
        cy.log(`The removed value from Rs.500 is : ${splitText}`);
      })
      .click({ force: true });
  }

  get splitFunctionMenTShirt() {
    return cy
      .get('[class="col-sm-4"]')
      .eq(2)
      .contains("Rs. 400")
      .invoke("text")
      .then((text) => {
        const splitText = text.split(" ")[1];
        expect(splitText).to.equal("400");
        if (splitText < 1000) {
          cy.get('[class="col-sm-4"]')
            .contains("Add to cart")
            .click({ force: true });
        } else {
          cy.log(`The removed value from Rs.400 is : ${splitText}`);
        }
      });
  }

  get splitFunctionSleevlessDress() {
    return cy
      .get('[class="col-sm-4"]')
      .eq(3)
      .contains("Rs. 1000")
      .invoke("text")
      .then((text) => {
        const splitText = text.split(" ")[1];
        expect(splitText).to.equal("1000");
        if (splitText < 1000) {
          cy.get('[class="col-sm-4"]').contains("Add to cart").click();
        } else
          cy.log(
            `the value should be less than 1000 to add the product into cart`
          );
        cy.log(`The removed value from Rs.1000 is : ${splitText}`);
      });
  }

  get splitFunctionStylishDress() {
    return cy
      .get('[class="col-sm-4"]')
      .eq(4)
      .contains("Rs. 1500")
      .invoke("text")
      .then((text) => {
        const splitText = text.split(" ")[1];
        expect(splitText).to.equal("1000");
        if (splitText < 1000) {
          cy.get('[class="col-sm-4"]').contains("Add to cart").click();
        } else
          cy.log(
            `the value should be less than 1000 to add the product into cart`
          );
        cy.log(`The removed value from Rs.1500 is : ${splitText}`);
      })
      .click({ force: true });
  }
}
