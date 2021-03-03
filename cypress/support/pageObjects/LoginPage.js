/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'

const loginElements = new LoginElements

class LoginPage {

    // Informa email no input do email
    informarEmail(email) {
        cy.get(loginElements.inputEmail()).type(email)
    }

    // Informa senha no input da senha
    informarSenha(senha) {
        cy.get(loginElements.inputPassword()).type(senha)
    }

    // Clica no botão de realizar login
    clicarBotaoRealizarLogin() {
        cy.get(loginElements.btnSubmitLogin()).click()
    }

    // Confirmar o título da página inicial após login
    confirmarTituloAreaLogada() {
        cy.title().should('be.equal', 'My account - My Store')
    }

    // Visualizar mensagem de erro "Usuário ou senha inválidos."
    visualizarErroLogin() {
        //cy.get(loginElements.mensagemErro()).should('contain', 'Invalid password.')
        cy.get(loginElements.errorMessage()).should('be.visible')
    }

    // Método para fazer Login
    fazerLogin(email, senha) {
        this.informarEmail(email)
        this.informarSenha(senha)
        this.clicarBotaoRealizarLogin()
        this.confirmarTituloAreaLogada()
    }
}

export default LoginPage;