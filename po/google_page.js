var google_page = function () {
    this.search_field = element(by.name('q'));

    this.fillSearchField = function () {
        this.search_field.sendKeys('test');    
    };
}    

module.exports = google_page;
