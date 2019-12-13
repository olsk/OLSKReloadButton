const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKReloadButton_Misc', function () {

	it('classes OLSKToolbarButton', function () {
		browser.assert.hasClass(OLSKReloadButton, 'OLSKToolbarButton')
	});

	it('classes OLSKLayoutElementTappable', function () {
		browser.assert.hasClass(OLSKReloadButton, 'OLSKLayoutElementTappable')
	});
	
	it('classes OLSKLayoutButtonNoStyle', function () {
		browser.assert.hasClass(OLSKReloadButton, 'OLSKLayoutButtonNoStyle')
	});

});
