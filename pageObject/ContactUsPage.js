class ContactUsPage{
    reasonDropdown() {
       return cy.get('#Reason_for_Contact__c')
    }
    firstNameField() {
        return cy.get('#FirstName')
    }
    lastNameField(){
        return cy.get('#LastName')
    }
    emailField(){
        return cy.get('#Email')
    }
    contryDropdown(){
        return cy.get('#Phone_Number_Extension__c')
    }
    phoneNumberField(){
        return cy.get('#Phone_Number_Base__c')
    }
    companyWebsiteField(){
         return cy.get('#Website')
    }
    requestField(){
        return cy.get('#Form_Additional_Information__c')
    }
    howDidField(){
        return cy.get('#How_did_you_hear_about_Telnyx_Open__c')
    }
    sumbitButton(){
        return cy.get('[class="mktoButton"]')
    }
    submitMessageText() {
        return cy.get('h1>span')
    }
    ErrorMsg() {
    return cy.get('#ValidMsgReason_for_Contact__c')
    }
    
    //constructor

    enterEmailFieldValue(Email) {
        this.emailField().type(Email)
    }
    enterFirstNameFieldValue(Name) {
        this.firstNameField().type(Name)
    }
    enterLastNameFieldValue(Name) {
        this.lastNameField().type(Name)
    }
    selectSupportOptionInReasonForContactDropdown() {
        this.reasonDropdown().select('Support')
    }
    selectCanadaOptionInCountryDropdown() {
        this.contryDropdown().select('Canada (+1)')
    }
    enterPhoneNumberFieldValue(Number) {
        this.phoneNumberField().type(Number)
    }
    enterCompanyWebsiteFieldValue(Website) {
        this.companyWebsiteField().type(Website)
    }
    checkSubmitMessageTextVisibility() {
        this.submitMessageText().should('have.text', 'Thank you.')
    }     
    clickSubmitButton() {
        this.sumbitButton().click()
    }
    enterHowDidYouHearAboutTelnyxFieldValue(Text) {
        this.howDidField().type(Text)
    }
    enterDescribeYourRequestFieldValue(Text) {
        this.requestField().type(Text)
    }
    CheckErrorMassageTextVisibility() {
        this.ErrorMsg().should('have.text', 'This field is required.')
    }
}


    module.exports = new ContactUsPage()