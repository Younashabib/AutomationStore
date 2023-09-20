export class contactUs {
  get feedbackForUs() {
    return cy.get('[class="title text-center"]');
  }

  get emailContactUsPage() {
    return cy
      .get('[class="contact-info"]')
      .contains('a[href="mailto:feedback@automationexercise.com"]');
  }

  get getInTouchContactUsForm() {
    return cy.get("#contact-us-form");
  }

  get getInTouchContactUsFormName() {
    return cy.get('[placeholder="Name"]');
  }

  get getInTouchContactUsFormEmail() {
    return cy.get('[placeholder="Email"]');
  }

  get getInTouchContactUsFormSubject() {
    return cy.get('[placeholder="Subject"]');
  }

  get getInTouchContactUsFormYourMessageHere() {
    return cy.get('[placeholder="Your Message Here"]');
  }

  get getInTouchContactUsChooseFile() {
    return cy.get('[name="upload_file"]');
  }

  get getInTouchContactUsSubmitButton() {
    return cy.get('[value="Submit"]');
  }

  fileUpload(filePath) {
    cy.get('[name="upload_file"]') // get ID
      .selectFile(filePath) //function to get file
      .click()
      .then(() => {
        cy.get("#uploadedFilePath").contains("fakepath"); //assertion to get proof of file upload
      });
  }

  fillGetInTouchContactUsForm(TestName, TestEmail, TestSubject) {
    this.getInTouchContactUsForm;
    this.getInTouchContactUsFormName.type(TestName);
    this.getInTouchContactUsFormEmail.type(TestEmail);
    this.getInTouchContactUsFormSubject.type(TestSubject);
    this.getInTouchContactUsFormYourMessageHere.type(TestSubject);
    this.getInTouchContactUsChooseFile.click();
    this.fileUpload(filePath);
  }
}
