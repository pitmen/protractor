var HomePage = function () {
  this.logout = element(by.css('.__logout'));

  this.logoutLinkIsEnabled = function () {
    var resul = this.logout.isEnabled().then(function (resp) {
      console.log(resp);
      return resp;
    });
    return resul;
  }
};

module.exports = HomePage;
