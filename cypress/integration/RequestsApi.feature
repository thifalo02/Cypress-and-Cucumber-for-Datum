Feature: Realizar requests em uma API Rest

    Scenario: realizar a requisição do tipo POST
        When realizar um request POST para registrar um usuário
        Then deverá registrar um usuário com status 200

    Scenario: realizar requisição do tipo GET Single User
        When realizar um request GET single user para buscar dados de um usuário
        Then deverá retornar um usuário com status 200

    Scenario: realizar requisição do tipo GET List Users
        When realizar um request GET list users para buscar uma lista de usuários
        Then deverá retornar status 200 com uma lista de usuários

    Scenario: realizar requisição do tipo PATCH
        When realizar um request PATCH para atualizar dados de um usuário existente
        Then deverá retornar status 200