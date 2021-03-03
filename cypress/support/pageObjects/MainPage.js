/// <reference types="Cypress" />

import MainPageElements from '../elements/MainPageElements'

const mainPageElements = new MainPageElements
const url = Cypress.config("baseUrl")

class MainPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(mainPageElements.botaoLogin()).click()
    }

    // Confirmar o título da página inicial login
    confirmarTituloAreaLogada() {
        cy.title().should('be.equal', 'My Store')
    }
}

export default MainPage;