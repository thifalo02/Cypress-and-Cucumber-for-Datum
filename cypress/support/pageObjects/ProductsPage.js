/// <reference types="Cypress" />

import ProductsElements from '../elements/ProductsElements'

const productsElements = new ProductsElements

class ProductsPage {

    // Adicionar do produto Chiffon Dress ao carrinho de compras
    adicionarProdutoChiffonDress() {
        cy.get(productsElements.btnMenuDresses()).click()
        cy.get(productsElements.btnAddChiffonDress()).click()
    }

    // Clicar no botão continuar comprando
    continuarComprando() {
        cy.get(productsElements.btnContinueShopping()).click()
    }

    // Adicionar do produto Summer Dress ao carrinho de compras
    adicionarProdutoSummerDress() {
        cy.get(productsElements.btnAddSummerDress()).click()
        cy.get(productsElements.btnGoCheckout()).click()
    }

    // Método para adicionar dois produtos 
    adicionarDoisProdutos() {
        this.adicionarProdutoChiffonDress()
        this.continuarComprando()
        this.adicionarProdutoSummerDress()
    }
}

export default ProductsPage;