import SignUpPage from "../../../pageObject/signUpPage";
import TextGenerator from  "../../../helpers/TextGererator"
import CoockiesPage from "../../../pageObject/coockiesPage"
import LoginPage from "../../../pageObject/loginPage" 
import MainPage from "../../../pageObject/mainPage";
import loginPage from "../../../pageObject/loginPage";
import ContactUsPage from "../../../pageObject/ContactUsPage";
import partnerPage from "../../../pageObject/partnerPage";
import coockiesPage from "../../../pageObject/coockiesPage";
import header from "../../../pageObject/header";
import productPage from "../../../pageObject/productPage";

let Name
let Email
let Password
let Number
let Website
let Text


describe('Telenyx E2E tests', () => {
    beforeEach(() => {
        Name = TextGenerator.randomName()
        Email = TextGenerator.randomEmail()
        Password = TextGenerator.randomPassword()
        Number = TextGenerator.randomNumber()
        Website = TextGenerator.randomWebsite()
        Text = TextGenerator.randomLongText()
        cy.visit("/")
        coockiesPage.clickSubmitButton()
        
    }) 

    it('should sing in with invalid data on https://telnyx.com', () => {
        SignUpPage.clickHeaderSignUpButton()
        SignUpPage.submitButton().should('be.visible')
        SignUpPage.enterEmailFieldValue(Email)
        SignUpPage.enterFullNameFieldValue(Name)
        SignUpPage.enterPasswordFieldValue(Password)
        SignUpPage.clickAgreeButton()
        SignUpPage.clickSubmitButton()
        SignUpPage.checkSubmitTextMessageVisibility()
    })
    it('should send messege for contact us with valid data on https://telnyx.com', () => {
        MainPage.clickContactUsButton()
        ContactUsPage.selectSupportOptionInReasonForContactDropdown()
        ContactUsPage.enterFirstNameFieldValue(Name)
        ContactUsPage.enterLastNameFieldValue(Name)
        ContactUsPage.enterEmailFieldValue(Email)
        ContactUsPage.selectCanadaOptionInCountryDropdown()
        ContactUsPage.enterPhoneNumberFieldValue(Number)
        ContactUsPage.enterCompanyWebsiteFieldValue(Website)
        ContactUsPage.enterDescribeYourRequestFieldValue(Text)
        ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
        ContactUsPage.clickSubmitButton()
        ContactUsPage.checkSubmitMessageTextVisibility()
    })
    it('should send messege for contact us with invalid data on  https://telnyx.com', () => {
        MainPage.clickContactUsButton()
        ContactUsPage.clickSubmitButton()
        ContactUsPage.CheckErrorMassageTextVisibility()
    })
    it('should send massage to became a partner with valid data on https://telnyx.com', () => {
        partnerPage.WhyTelnyxDropdownClick()
        partnerPage.PartnersBtnClick()
        partnerPage.ScrollfirstNameField()
        partnerPage.enterFirstNameFieldValue(Name)
        partnerPage.enterLastNameFieldValue(Name)
        partnerPage.enterCompanyFieldValue(Text)
        partnerPage.enterBuisnessEmailFieldValue(Email)
        partnerPage.selectCanadaOptionInCountryDropdown()
        partnerPage.enterPhoneNumberFieldValue(Number)
        partnerPage.selectPartnerTypeDropdown()
        partnerPage.enterTellUsFieldValue(Text)
        partnerPage.SumbitBtnclick()
        partnerPage.VerifySubmitMessageText()
    })
    it('should send massage to became a partner with invalid data https://telnyx.com', () => {
        partnerPage.WhyTelnyxDropdownClick()
        partnerPage.PartnersBtnClick()
        partnerPage.SumbitBtnclick()
        partnerPage.CheckErrorMassageTextVisibility()
    })
    it('should check Header buttons on https://telnyx.com', () => {
        header.ClickProductsDropdown()
        header.CheckProductsDropdownBtns().should('have.length' ,7)
        header.ClickPricingDropdown()
        header.CheckPricingDropdownBtns().should('have.length' ,7)
        header.ClickWhyTelnyxDropdown()
        header.CheckWhyTelnyxDropdownBtns().should('have.length' ,5)
        header.ClickRerourcesDropdown()
        header.CheckRerourcesDropdownBtns().should('have.length' ,3)
        header.ClickDevelopersDropdown()
        header.CheckDevelopersDropdownBtns().should('have.length' ,2)
    })
    it('should Contact Us form via "Products" page with positive scenario on https://telnyx.com', () => {
        MainPage.clickProductsDropdown()
        MainPage.clickSeeAllProductsButton()
        productPage.clickContactUsButton()
        ContactUsPage.selectSupportOptionInReasonForContactDropdown()
        ContactUsPage.enterFirstNameFieldValue(Name)
        ContactUsPage.enterLastNameFieldValue(Name)
        ContactUsPage.enterEmailFieldValue(Email)
        ContactUsPage.selectCanadaOptionInCountryDropdown()
        ContactUsPage.enterPhoneNumberFieldValue(Number)
        ContactUsPage.enterCompanyWebsiteFieldValue(Website)
        ContactUsPage.enterDescribeYourRequestFieldValue(Text)
        ContactUsPage.enterHowDidYouHearAboutTelnyxFieldValue(Text)
        ContactUsPage.clickSubmitButton()
        ContactUsPage.checkSubmitMessageTextVisibility()
    })
    it('should Verify subtitles in the "Your one-stop shop for distributed infrastructure." text and sections on Products page on https://telnyx.com', () => {
        MainPage.clickProductsDropdown()
        MainPage.clickSeeAllProductsButton()
        productPage.checkProductsTextVisibility()
        productPage.checkCommunicationsWindowVisibility()
        productPage.checkNetworkingWindowVisibility()
        productPage.checkProductsTextVisibility()
        productPage.checkStorageWindowVisibility()
    }) 
    it('should Check that entered value in "Enter business email" field on the Main Page appearst in "Enter business email" field on Sign Up page on https://telnyx.com', () => {
        MainPage.scrollToEmailField()
        MainPage.enterEmailFieldValue(Email)
        MainPage.clickBudySignUpButton()
        SignUpPage.checkEmailFieldForMachingValue(Email)
    })
     it('should Check that "Communications", "Networking", "Wireless", "Storage" options are visible on Products pageon https://telnyx.com', () => {
        MainPage.clickProductsDropdown()
        MainPage.clickSeeAllProductsButton()
        productPage.checkProductsTextVisibility()
        productPage.checkCommunicationsWindowVisibility()
        productPage.checkNetworkingWindowVisibility()
        productPage.checkProductsTextVisibility()
        productPage.checkStorageWindowVisibility()
    }) 
});