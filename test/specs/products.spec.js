const assert = require('assert');

describe('angular page', () => {
    it('should have the right title', () => {
        browser.url('');
        const title = browser.getTitle();
        assert.equal(title, 'Angular7Crud');
    });

    it('should be able to create a product', () => {
        
        browser.url('');
        
        var addProduct = $('.mat-flat-button','.mat-primary');
        
        addProduct.click();

        var productName = $('#mat-input-0');
        var productDescription = $('#mat-input-1');
        var productPrice = $('#mat-input-2');
        var submitButton = $('[type=submit]');

        productName.setValue("newt");
        productDescription.setValue("amphibian");
        productPrice.setValue("100");
        submitButton.click();

        var productHeader = $('h2');

        assert.equal(productHeader.getText(), "newt", "Heading incorrect");

        


    });

});