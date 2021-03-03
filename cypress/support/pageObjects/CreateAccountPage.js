/// <reference types="Cypress" />

import CreateAccountElements from '../elements/CreateAccountElements'

const createAccountElements = new CreateAccountElements

class CreateAccountPage {

    // Informa o email para cadastro
    preencherEmailNovoCadastro(email) {
        cy.get(createAccountElements.emailAddressHome()).type(email)
    }

    // Clica no botão Create Account
    clicarBotaoCreateAccount() {
        cy.get(createAccountElements.btnCreateAccount()).click()
    }

    // Preenche o form
    preencherFormNovaConta(email) {
        cy.get(createAccountElements.radioBtnGender()).check()
        cy.get(createAccountElements.customerFirstNameInput()).type("João")
        cy.get(createAccountElements.customerLastNameInput()).type("Mock")
        cy.get(createAccountElements.passwordInput()).type("testePass123")
        cy.get(createAccountElements.addressFirstNameInput()).type("João")
        cy.get(createAccountElements.addressLastNameInput()).type("Mock")
        cy.get(createAccountElements.addressOneInput()).type("Rua 2870, 100")
        cy.get(createAccountElements.cityInput()).type("Balneário Camboriú")
        cy.get(createAccountElements.dropState()).select("Alabama")
        cy.get(createAccountElements.postalCodeInput()).type("00000")
        cy.get(createAccountElements.dropCountry()).select("United States")
        cy.get(createAccountElements.mobilePhoneInput()).type("47 999999999")
        cy.get(createAccountElements.addressAliasInput()).type(email)
    }

    // Submeter o form 
    submeterFormNovaConta() {
        cy.get(createAccountElements.btnSubmitAccount()).click()
    }

    // Método para criar nova conta
    criarNovaConta(email) {
        this.preencherEmailNovoCadastro(email)
        this.clicarBotaoCreateAccount()
        this.preencherFormNovaConta(email)
    }
}

export default CreateAccountPage;