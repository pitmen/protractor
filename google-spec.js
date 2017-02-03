var google_page = require('../protractor/po/google_page')

describe('search in google', function () {
    var google = new google_page();
    
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        //Aqui você coloca qual a página que vai ser acessar
        browser.get('http://www.google.com.br');        
    });

    it('fill search field', function () {
        google.fillSearchField();
        // Não faça isso. 
        // Coloquei essa linha para que ficasse fácil a visualização.
        browser.sleep(5000);

        expect(browser.getTitle()).toEqual('Google');
    })
})