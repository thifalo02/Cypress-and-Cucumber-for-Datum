/* global Given, Then, When */

const { expect } = require("chai")

const baseUrl = "https://reqres.in"
const id = 2

// POST Request to API
When("realizar um request POST para registrar um usuário", () => {
    cy.request({
        method: 'POST',
        url: baseUrl + '/api/register',
        body: {
            email: "eve.holt@reqres.in",
            password: "pistol"
        }
    }).as('response')
})

Then("deverá registrar um usuário com status 200", () => {
    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(200)
        expect(res.body).to.have.property('id')
        expect(res.body).to.have.property('token')
    })
})

// GET Single user request to API
When("realizar um request GET single user para buscar dados de um usuário", () => {
    cy.request({
        method: 'GET',
        url: baseUrl + '/api/users/' + id,
    }).as('response')
})

Then("deverá retornar um usuário com status 200", () => {
    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(200)
        expect(res.body).to.have.property('data')
        expect(res.body).to.have.property('support')
        expect(res.body.data.id).to.be.equal(id)
    })
})

// GET List users request to API
When("realizar um request GET list users para buscar uma lista de usuários", () => {
    cy.request({
        method: 'GET',
        url: baseUrl + '/api/users?page=2',
    }).as('response')
})

Then("deverá retornar status 200 com uma lista de usuários", () => {
    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(200)
        expect(res.body).to.have.property('data')
        expect(res.body.total).to.be.greaterThan(1)
    })
})

// PATCH Request to API
When("realizar um request PATCH para atualizar dados de um usuário existente", () => {
    cy.request({
        method: 'PATCH',
        url: baseUrl + '/api/users/' + id,
        qs: {
            nome: "morpheus",
            job: "zion resident"
        }
    }).then(res => {
        cy.request({
            url: baseUrl + '/api/users/' + id,
            method: 'PATCH',
            body: {
                name: "morpheus",
                job: "zion resident"
            }
        }).as('response')
    })
})

Then("deverá retornar status 200", () => {
    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(200)
    })
})