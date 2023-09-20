/// <reference types ="Cypress" />

import { featureItems } from "../support/1- homePageSupport";
let FeatureItems = new featureItems();
beforeEach(() => {
  cy.visit("/");
});
describe("Home Page Automation Exercise", () => {
  it("visit HomePage ", () => {
    FeatureItems.cartPage.click().wait(2000); //Open Cart Page
    FeatureItems.emptyCartPage.should("include.text", "Cart is empty!"); //Verify Empty Cart Page
    FeatureItems.homePage.click();
    FeatureItems.blueTop.click();
    //FeatureItems.productAddedInCartConfirmationDialogeBox; //Navigates to Cart Page
    FeatureItems.productAddedInCartAndViewInCart //Verify Product is added into Cart
      .should("include.text", "Continue Shopping")
      .click()
      .wait(2000);
    FeatureItems.homePage.click().wait(2000);
    FeatureItems.menTShirt.click().wait(2000);
    FeatureItems.productAddedInCartAndViewInCart
      .should("include.text", "Continue Shopping")
      .click()
      .wait(2000);

    FeatureItems.homePage.click().wait(2000);
  });
});
