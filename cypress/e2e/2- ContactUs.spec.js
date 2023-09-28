/// <reference types = "Cypress" />

import { featureItems } from "../support/Extra/1- homePageSupport";
import { contactUs } from "../support/Extra/2- ContactUs";
import { testData2 } from "../fixtures/ContactUsForm/ContactUsForm.fixture.json";

let TestName = "TestName";
let TestEmail = "abc@test.de";
let TestSubject = "New Subject";

let FeatureItems = new featureItems();
let ContactUs = new contactUs();
beforeEach(() => {
  cy.visit("/");
});

describe("Verify Contact Us Page", () => {
  it("Click on ContctUs Link and verify", () => {
    FeatureItems.contactUsLink.click({ force: true });
    //ContactUs.feedbackForUs;
    ContactUs.fillGetInTouchContactUsForm(TestName, TestEmail, TestSubject);
  });
});
