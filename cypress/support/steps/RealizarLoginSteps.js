/* global Given, Then, When */

import MainPage from '../pageobjects/MainPage'
import LoginPage from '../pageobjects/LoginPage'

const mainPage = new MainPage
const loginPage = new LoginPage

When("clico no botão acessar página de login", () => {
    mainPage.clicarBotaoPaginaLogin();
})

Given("acesso o site My Store", () => {
    mainPage.acessarSite();
})

And("informo o email {} do usuário", (email) => {
    loginPage.informarEmail(email);
})

And("informo a senha {} do usuário", senha => {
    loginPage.informarSenha(senha);
})

And("clico no botão para realizar login", () => {
    loginPage.clicarBotaoRealizarLogin();
})

Then("devo visualizar a area logada de usuários", () => {
    loginPage.confirmarTituloAreaLogada();
})

Then("devo visualizar uma mensagem de erro", () => {
    loginPage.visualizarErroLogin();
})