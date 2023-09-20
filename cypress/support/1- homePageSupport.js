export class featureItems {
  get homePage() {
    return cy.get('[class="col-sm-4"]');
  }
  get cartPage() {
    return cy.get('[class="nav navbar-nav"]').contains("Cart");
  }

  get emptyCartPage() {
    return cy.get("#empty_cart");
  }

  get addToCart() {
    return cy.get('[class="col-sm-4"]').contains("Add to cart");
  }

  get productAddedInCartConfirmationDialogeBox() {
    return cy.get('[class="modal-content"]');
  }

  get productAddedInCartAndViewInCart() {
    return cy.get('[class="modal-footer"]');
  }

  get blueTop() {
    return cy.get('[class="col-sm-4"]').eq(1).contains("Add to cart");
  }
  get menTShirt() {
    return cy.get('[class="col-sm-4"]').eq(2).contains("Add to cart");
  }
  get sleevlessDress() {
    return cy.get('[class="col-sm-4"]').eq(3).contains("Add to cart");
  }
  get stylishDress() {
    return cy.get('[class="col-sm-4"]').eq(4).contains("Add to cart");
  }
  get winterTop() {
    return cy.get('[class="col-sm-4"]').eq(5).contains("Add to cart");
  }

  testLoop() {
    for (let i = 1; i <= 41; i++) {
      cy.get('[class="col-sm-4"]')
        .contains("Add to cart")
        .invoke("text")
        .then((text) => {
          const splitText = text.split(" ")[1];
          //expect(splitText).to.equal("400");
          if (splitText < 1000) {
            cy.get('[class="col-sm-4"]').contains("Add to cart").click();
          }
          //cy.log(`The removed value from Rs.400 is : ${splitText}`);
        });
    }
  }
}
