import { SignUpPage } from "../Pages/signup.page";
export class NavigationMenu {
  get getSignUpPage() {
    cy.get('[href="/login"]').contains(" Signup / Login").click();
    return new SignUpPage();
  }
}
