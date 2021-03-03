/* global Given, Then, When */

import CreateAccountPage from '../pageobjects/CreateAccountPage'

const createAccountPage = new CreateAccountPage
var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var email = ''

// Método suporte para criar email
function randomEmail() {
    for (var ii = 0; ii < 15; ii++) {
        email += chars[Math.floor(Math.random() * chars.length)];
    }
    return email + '@mock.com'
}
email = randomEmail()

Given("cadastrar um novo usuário", () => {
    createAccountPage.criarNovaConta(email)
})