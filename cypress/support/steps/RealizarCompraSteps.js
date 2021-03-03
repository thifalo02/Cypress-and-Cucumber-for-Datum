/* global Given, Then, When */

import ProductsPage from '../pageobjects/ProductsPage'
import LoginPage from '../pageobjects/LoginPage'
import CheckoutPage from '../pageobjects/CheckoutPage'

const productsPage = new ProductsPage
const loginPage = new LoginPage
const checkoutPage = new CheckoutPage

const email = "datumqatest@soprock.com"
const senha = "datum2021"

When("logar no site com um usuário válido", () => {
    loginPage.fazerLogin(email, senha)
})

And("adicionar 2 produtos ao carrinho", () => {
    productsPage.adicionarDoisProdutos()
})

When("realizar o pagamento dos produtos", () => {
    checkoutPage.fazerCheckoutProdutos()
})

Then("confirmação de sucesso da ordem é apresentada", () => {
    checkoutPage.validarCheckoutCompleto()
})
