var google_page = require('../protractor/po/google_page')

describe('search in google', function () {
    var google = new google_page();
    
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        //Aqui você coloca qual a página que vai ser acessar
        browser.get('http://www.google.com.br');

        expect(browser.getTitle()).toEqual('Google');
    });

    it('fill search field', function () {
        google.fillSearchField();
        browser.sleep(5000);
    })
})