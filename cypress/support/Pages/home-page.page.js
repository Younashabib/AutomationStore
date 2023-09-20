import { NavigationMenu } from "../Components/navigation-header.menu";

export class HomePage extends NavigationMenu {
  get cartLink() {
    return cy.get('[href="/view_cart"]').contains(" Cart");
  }

  get homePageLink() {
    return cy.get('[href="/"]').contains(" Home");
  }

  get productsLink() {
    return cy.get('[href="/products"]').contains("Products");
  }

  // get loginLink() {
  //   return cy.get('[href="/login"]').contains(" Signup / Login");
  // }

  get contactUsLink() {
    return cy.get('[href="/contact_us"]').contains(" Contact us");
  }
}
