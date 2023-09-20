/// <reference types ="Cypress" />

import { loopsFeatureItems } from "../support/1- homePageSupportLoops";
import { featureItems } from "../support/1- homePageSupport";
let FeatureItems = new featureItems();
let LoopsFeatureItems = new loopsFeatureItems();

beforeEach(() => {
  cy.visit("/");
});

describe("", () => {
  it("loops", () => {
    for (let i = 1; i <= 10; i++) {
      cy.get('[class="col-sm-4"]')
        .eq(i)
        .find('div[class="overlay-content"]')
        .invoke("text")
        .then((text) => {
          const splitText = text.split("Rs. ").pop().split("\n")[0];
          cy.log("after split1: " + splitText);
          if (splitText < 1000) {
            cy.get('[class="col-sm-4"]')
              .eq(i)
              .find('div[class="overlay-content"]')
              .contains("Add to cart")
              .click({ force: true });

            cy.contains("button", "Continue Shopping").click();
          } else {
            cy.log("Price is:" + splitText + "that is above 1000");
          }
        });
    }
  });
  it.skip("Split", () => {
    LoopsFeatureItems.splitFunctionBlueTop;
    LoopsFeatureItems.splitFunctionMenTShirt;
    LoopsFeatureItems.splitFunctionSleevlessDress;
    //LoopsFeatureItems.test;
  });
});
