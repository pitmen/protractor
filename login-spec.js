var loginPage = require('../protractor/po/loginPage');
var HomePage = require('../protractor/po/HomePage');

describe('LogIn', function () {
  var home = new HomePage();
  var login = new loginPage();
  var usuario = 'tex.peixoto';
  var senha = 'Usjt3006._';

  beforeEach(function () {
    browser.ignoreSynchronization = true;
    //Aqui você coloca qual a página que vai ser acessar
    browser.get('http://sandbox.teleport.com.br/0');
    
    expect(browser.getTitle()).toEqual('Login');
  });

  it('no type user', function () {
    login.loginAs('', senha);
    expect(login.avisoIsEnabled()).toBe(true);
  });

  it('no type password', function () {
    login.loginAs(usuario, '');
    expect(login.avisoIsEnabled()).toBe(true);
  });

  it('no type user and password', function () {
    login.loginAs('', '');
    expect(login.avisoIsEnabled()).toBe(true);
  });

  it('unsucess login', function () {
    login.loginAs(usuario, 'Usjt3011');
    expect(login.avisoIsEnabled()).toEqual(true);
  })

  it('sucess login', function () {
    login.loginAs(usuario, senha);
    browser.sleep(5000);
    expect(home.logoutLinkIsEnabled()).toBe(true);
  });

  afterAll(function () {
    browser.quit();
  });

});