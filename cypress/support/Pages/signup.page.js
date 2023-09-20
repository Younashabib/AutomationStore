export class SignUpPage {
  get titleSignUpPage() {
    return cy.get('[class="clearfix"]').contains("Title");
  }
  get namesSignUpPage() {
    return cy.get("#name").clear();
  }

  get emailSignUpPage() {
    return cy.get("#email");
  }

  get passwordSignUpPage() {
    return cy.get("#password");
  }

  get dateOfBirthForm() {
    return cy.get('[class="form-group"]').contains("Date of Birth");
  }
  get dateOfBirth() {
    return cy.get("#days");
  }
  get monthOfBirth() {
    return cy.get("#months");
  }

  get yearOfBirth() {
    return cy.get("#years");
  }

  get newsLetterLocator() {
    return cy.get("#newsletter");
  }

  get specialOfferLocator() {
    return cy.get("#optin");
  }

  get createAccountButton() {
    return cy.get('[type="submit"]').contains("Create Account");
  }

  get newUserCreated() {
    return cy
      .get('[class="title text-center"]')
      .contains("Account Created!")
      .find('[class="btn btn-primary"]')
      .click();
  }
  newUserSignUp(userName, signUpEmail) {
    cy.get('[class="signup-form"]').contains("New User Signup!");
    cy.get('[data-qa="signup-name"]').type(userName);
    cy.get('[data-qa="signup-email"]').type(signUpEmail);
    cy.get('[data-qa="signup-button"]').click();
  }

  // verifyAccountExistsforCreatedUser() {
  //   this.newUserSignUp(testData.userName, testData.signUpEmail);
  //   cy.get('[data-qa="signup-button"]').click();
  //   let errorMessage;
  //   if (errorMessage === "Email Address already exist!") {
  //     cy.log(`You cannot be signed up as ${errorMessage}.`);
  //   } else {
  //     cy.log(`You can be signed up using new email.`);
  //   }
  // }

  addressInformation(
    firstName,
    lastName,
    company,
    address1,
    address2,
    state,
    city,
    zipcode,
    mobileNumber
  ) {
    cy.get("#first_name").type(firstName);
    cy.get("#last_name").type(lastName);
    cy.get("#company").type(company);
    cy.get("#address1").type(address1);
    cy.get("#address2").type(address2);
    cy.get("#country").select("Canada");
    cy.get("#state").type(state);
    cy.get("#city").type(city);
    cy.get("#zipcode").type(zipcode);
    cy.get("#mobile_number").type(mobileNumber);
  }
  fillingSignUpUserForm(
    nameOfNewUser,
    passwordOfSignUpPage,
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    zipcode,
    mobileNumber
  ) {
    this.titleSignUpPage.get("#id_gender1").click();
    this.titleSignUpPage.get("#id_gender2").click();
    this.namesSignUpPage.type(nameOfNewUser);
    this.emailSignUpPage;
    this.passwordSignUpPage.type(passwordOfSignUpPage);
    this.dateOfBirthForm;
    this.dateOfBirth.select("3");
    this.monthOfBirth.select("6");
    this.yearOfBirth.select("2016");
    this.newsLetterLocator.check();
    this.specialOfferLocator.check();
    this.addressInformation(
      firstName,
      lastName,
      company,
      address1,
      address2,
      country,
      state,
      zipcode,
      mobileNumber
    );
    this.createAccountButton.click();
  }
}
