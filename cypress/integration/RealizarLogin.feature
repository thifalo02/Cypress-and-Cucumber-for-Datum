Feature: Validar funcionalidade de login no site My Store

    Background: Acessar o site My Store
        Given acesso o site My Store
        When clico no botão acessar página de login

    Scenario Outline: Realizar login no site My Store
        And informo o email <email> do usuário
        And informo a senha <senha> do usuário
        And clico no botão para realizar login
        Then devo visualizar a area logada de usuários

        Examples:
            | email                   | senha     |
            | datumqatest@soprock.com | datum2021 |

    Scenario Outline: Realizar login com dados inválidos
        And informo o email <email> do usuário
        And informo a senha <senha> do usuário
        And clico no botão para realizar login
        Then devo visualizar uma mensagem de erro

        Examples:
            | email               | senha    |
            | testefake1@mock.com | mockpass |
