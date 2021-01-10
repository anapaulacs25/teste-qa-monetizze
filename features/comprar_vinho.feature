Feature: Tentativa de compra de vinho

Scenario: Comprando vinho na loja
   Given Estou no e-commerce para comprar vinho.
   And Entro na página loja pelo menu.
   And Seleciono um vinho para ver seus detalhes.
   When Eu escolho uma quantidade.
   And Clico em comprar.
   Then Deve avançar para página de carrinho, se a quantidade for maior que zero.