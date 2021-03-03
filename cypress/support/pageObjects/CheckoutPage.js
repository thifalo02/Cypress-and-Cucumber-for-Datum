/// <reference types="Cypress" />

import CheckoutElements from '../elements/CheckoutElements'

const checkoutElements = new CheckoutElements

class CheckoutPage {

    // Avançar para o Checkout
    clicarBtnProccedToCheckout() {
        cy.get(checkoutElements.btnProccedToCheckout()).click()
    }
    // Marcar checkbox Agree Term (true)
    marcarTermCheck() {
        cy.get(checkoutElements.checkboxAgreeTerm()).check()
    }

    // Selecionar Bank Wire Order Option
    selecionarBankWire() {
        cy.get(checkoutElements.bankWireOrderOptionBtn()).click()
    }

    // Confirmar checkout order
    confirmaOrdem() {
        cy.get(checkoutElements.btnConfirmOrder()).click()
    }

    // Validar se o checkout está completo
    validarCheckoutCompleto() {
        cy.get(checkoutElements.textOrderIsComplete()).should('contain', 'Your order on My Store is complete.')
    }

    // Fazer checkout de produtos
    fazerCheckoutProdutos() {
        this.clicarBtnProccedToCheckout()
        this.clicarBtnProccedToCheckout()
        this.marcarTermCheck()
        this.clicarBtnProccedToCheckout()
        this.selecionarBankWire()
        this.confirmaOrdem()
    }
}

export default CheckoutPage;