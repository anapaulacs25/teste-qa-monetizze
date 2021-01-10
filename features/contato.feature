Feature: Tentativa de contato

Scenario: Fazendo o contato
   Given Estou no e-commerce para fazer um contato.
   And Entro na página contato pelo menu.
   And Preencho os campos.
   When Eu clico em enviar.
   Then Deve avançar para página de mensagem de agradecimento.