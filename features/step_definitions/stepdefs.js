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

