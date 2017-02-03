var loginPage = function () {
  var that = this;
  this.username = element(by.id('username'));
  this.password = element(by.id('password'));
  this.loginButton = element(by.id('btnLogin'));
  this.aviso = element(by.id('note'));

  this.typeUsername = function (user) {
    this.username.sendKeys(user);
  };

  this.typePassword = function (pass) {
    this.password.sendKeys(pass);
  };

  this.clickEntrar = function () {
    this.loginButton.click();
  };

  this.avisoIsEnabled = function () {
    var resul = this.aviso.isEnabled().then(function (resp) {
      console.log(resp);
      return resp;
    });
    return resul;
  }

  this.loginAs = function (user, pass) {
    this.typeUsername(user);
    this.typePassword(pass);
    this.clickEntrar();
  }
};
module.exports = loginPage;
