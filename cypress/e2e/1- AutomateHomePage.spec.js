/// <reference types ="Cypress" />

import { HomePage } from "../support/Pages/home-page.page";
import testData from "../fixtures/HomePageData/newUserSignUpForm.fixture.json";

let homePage = new HomePage();
const {
  userName,
  signUpEmail,
  nameOfNewUser,
  passwordOfSignUpPage,
  firstName,
  lastName,
  company,
  address1,
  address2,
  state,
  city,
  zipcode,
  mobileNumber,
} = testData;

beforeEach(() => {
  cy.visit("/");
});

describe("HomePage Verification", () => {
  it("Verify all Header Links", () => {
    homePage.homePageLink.click({ force: true });
    homePage.productsLink.click({ force: true });
    homePage.cartLink.click({ force: true });
    homePage.loginLink.click({ force: true });
    homePage.contactUsLink.click({ force: true });
  });

  it.only("Verify New Account Creation", () => {
    // homePage.loginLink.click();
    let SignUpPage = homePage.getSignUpPage;
    SignUpPage.newUserSignUp(testData.userName, testData.signUpEmail);
    // homePage.newUserSignUp(testData.userName, testData.signUpEmail);
    // homePage.verifyAccountExistsforCreatedUser(
    //   testData.userName,
    //   testData.signUpEmail
    // );
    // homePage.fillingSignUpUserForm(
    //   testData.nameOfNewUser,
    //   testData.passwordOfSignUpPage,
    //   testData.firstName,
    //   testData.lastName,
    //   testData.company,
    //   testData.address1,
    //   testData.address2,
    //   testData.state,
    //   testData.city,
    //   testData.zipcode,
    //   testData.mobileNumber
    // );
    // homePage.verifyNewUserCreated;
  });
});
