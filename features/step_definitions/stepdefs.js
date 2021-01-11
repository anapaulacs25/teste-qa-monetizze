const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const {assert} = require('chai');

require("chromedriver");

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

const URL = "http://monetizzetesteqa.s3-website-us-east-1.amazonaws.com/"


  Given('Estou no e-commerce para comprar vinho.', {timeout: 60 * 1000}, async function () {
    await driver.get(URL)
  });


  Given('Entro na página loja pelo menu.', async function () {
    await driver.findElement(By.css(".site-menu > li:nth-child(4) > .nav-link")).click();
  });


  Given('Seleciono um vinho para ver seus detalhes.', async function () {
    await driver.findElement(By.css(".col-lg-4:nth-child(1) .img-fluid")).click();
  });


  When('Eu escolho uma quantidade.', async function () {
    await driver.findElement(By.css(".js-btn-minus")).click();
  });


  When('Clico em comprar.', {timeout: 60 * 1000}, async function () {
    var value  = await driver.findElement(By.css("input")).getAttribute("value");
    this.quantidade = value; 
    await driver.findElement(By.linkText("Comprar")).click();
  });


  Then('Deve avançar para página de carrinho, se a quantidade for maior que zero.', {timeout: 60 * 1000}, async function () {
    assert.notEqual(this.quantidade, 0, "Quantidade não pode ser 0(zero)");
  });


  


    Given('Estou no e-commerce para fazer um contato.', {timeout: 60 * 1000}, async function () {
      await driver.get(URL)
    });

    Given('Entro na página contato pelo menu.', async function () {
      await driver.findElement(By.css(".site-menu > li:nth-child(5) > .nav-link")).click();
    });

    Given('Preencho os campos.', function () {
      driver.findElement(By.id("fname")).sendKeys("Ana Paula");
      driver.findElement(By.id("lname")).sendKeys("Cristina");
      driver.findElement(By.id("eaddress")).sendKeys("Rua A, 947 - Vila Maria - Barra Mansa");
      driver.findElement(By.id("tel")).sendKeys("24999247271");
      driver.findElement(By.id("message")).sendKeys("Não consegui finalizar a compra pelo site");
    });

    When('Eu clico em enviar.', {timeout: 60 * 1000}, async function () {
      await driver.findElement(By.css(".btn")).click();
    });

    Then('Deve avançar para página de mensagem de agradecimento.', {timeout: 60 * 1000}, async function () {
      var urlAtual = await driver.getCurrentUrl();
      var urlAnterior = URL+"contact.html";
      assert.notEqual(urlAtual,urlAnterior, "A página de agradecimento não foi exibida.");
    
    });



