/// <reference types = "Cypress" />

import { homePage } from "../support/HomePageSupportPage";
import { signUpPageExtensionPage } from "../support/SignUpExtensionFile";
import { contactUs } from "../support/2- ContactUs";
import testData2 from "../fixtures/ContactUsForm/ContactUsForm.fixture.json";

const { TestName, TestEmail, TestSubject } = testData2;

let HomePage = new homePage();
let ContactUs = new contactUs();
beforeEach(() => {
  cy.visit("/");
});

describe("Verify Contact Us Page", () => {
  it("Click on ContctUs Link and verify", () => {
    HomePage.contactUsLink.click({ force: true });
    //ContactUs.feedbackForUs;
    ContactUs.fillGetInTouchContactUsForm(TestName, TestEmail, TestSubject);
  });
});
