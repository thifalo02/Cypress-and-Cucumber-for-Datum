Feature: Realizar compra no site My Store

    Background: Acessar o site My Store
        Given acesso o site My Store
        When clico no botão acessar página de login

    Scenario: Realizar compra de um produto no My Store
        Given logar no site com um usuário válido
        And adicionar 2 produtos ao carrinho
        When realizar o pagamento dos produtos
        Then confirmação de sucesso da ordem é apresentada

    Scenario: Realizar compra com usuário novo
        Given cadastrar um novo usuário
        And adicionar 2 produtos ao carrinho
        When realizar o pagamento dos produtos
        Then confirmação de sucesso da ordem é apresentada