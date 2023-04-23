class Header{

productsDropdown() {
    return cy.get('span').contains('Products').first()
}
ProductDropdownBtns() {
    return cy.get('[role="menuitem"]')
}
PricingDropdown() {
    return cy.get('span').contains('Pricing').first()
}
PricingDropdownBtns() {
    return cy.get('[role="menuitem"]')
}
WhyTelnyxDropdown() {
    return cy.get('span').contains('Why Telnyx').first()
}
WhyTelnyxDropdownBtns() {
    return cy.get('[role="menuitem"]')
}
RerourcesDropdown() {
    return cy.get('span').contains('Resources').first()
}
RerourcesDropdownBtns() {
    return cy.get('[role="menuitem"]')
}
DevelopersDropdown() {
    return cy.get('span').contains('Developers').first()
}
DevelopersDropdownBtns() {
    return cy.get('[role="menuitem"]')
}

//constructor

ClickProductsDropdown() {
    this.productsDropdown().click()
}
CheckProductsDropdownBtns() {
   return this.ProductDropdownBtns()
}
ClickPricingDropdown() {
    this.PricingDropdown().click()
}
CheckPricingDropdownBtns() {
    return this.PricingDropdownBtns()
}
ClickWhyTelnyxDropdown() {
    this.WhyTelnyxDropdown().click()
}
CheckWhyTelnyxDropdownBtns() {
    return this.PricingDropdownBtns()
}
ClickRerourcesDropdown() {
    this.RerourcesDropdown().click()
}
CheckRerourcesDropdownBtns() {
    return this.RerourcesDropdownBtns()
}
ClickDevelopersDropdown() {
    this.DevelopersDropdown().click()
}
CheckDevelopersDropdownBtns() {
    return this.DevelopersDropdownBtns()
}


}
module.exports = new Header()