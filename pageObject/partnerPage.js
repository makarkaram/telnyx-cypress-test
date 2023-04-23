class PartnerPage{

    WhyTelnyxDropdown() {
        return cy.get('span').contains('Why Telnyx').first()
     }
     PartnersBtn() {
        return cy.get('[href="/partnerships"]').first()
    }
    firstNameField() {
        return cy.get('#FirstName')
    }
    lastNameField() {
        return cy.get('#LastName')
    }
    CompanyField() {
        return cy.get('#Company')
    }
    BuisnessEmailField() {
        return cy.get('#Email')
    }
    contryDropdown() {
        return cy.get('#Phone_Number_Extension__c')
    }
    phoneNumberField() {
        return cy.get('#Phone_Number_Base__c')
    }
    PartnerTypeDropdown() {
        return cy.get('#Partner_Type__c')
    }
    TellUsField() {
        return cy.get('#Form_Additional_Information__c')
    }
    SumbitBtn() {
        return cy.get('.mktoButton')
    }
    submitMessageText() {
        return cy.get('span').contains('Thank you.')
    }
    ErrorMsg() {
        return cy.get('#ValidMsgFirstName')
        }

    //constructor

    WhyTelnyxDropdownClick() {
        this.WhyTelnyxDropdown().click()
     }
    PartnersBtnClick() {
        this.PartnersBtn().click()
    }
    ScrollfirstNameField() {
        this.firstNameField().scrollIntoView()
    }
    enterFirstNameFieldValue(Name) {
        this.firstNameField().type(Name)
    }
    enterLastNameFieldValue(Name) {
        this.lastNameField().type(Name)
    }
    enterCompanyFieldValue(Text) {
        this.CompanyField().type(Text)
    }
    enterBuisnessEmailFieldValue(Email) {
        this.BuisnessEmailField().type(Email)
    }
    selectCanadaOptionInCountryDropdown() {
        this.contryDropdown().select('Canada (+1)')
    }
    enterPhoneNumberFieldValue(Number) {
        this.phoneNumberField().type(Number)
    }
    selectPartnerTypeDropdown() {
        this.PartnerTypeDropdown().select('MSP')
    }
    enterTellUsFieldValue(Text) {
        this.TellUsField().type(Text)
    }
    SumbitBtnclick() {
        this.SumbitBtn().click()
    }
    VerifySubmitMessageText() {
        this.submitMessageText().should('have.text', 'Thank you.')
    }
    CheckErrorMassageTextVisibility() {
        this.ErrorMsg().should('have.text', 'This field is required.')
    }


}
    module.exports = new PartnerPage()