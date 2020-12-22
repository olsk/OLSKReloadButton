const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKReloadButton_Misc', function () {

	it('classes OLSKToolbarButton', function () {
		browser.assert.hasClass(OLSKReloadButton, 'OLSKToolbarButton')
	});

	it('classes OLSKDecorTappable', function () {
		browser.assert.hasClass(OLSKReloadButton, 'OLSKDecorTappable')
	});
	
	it('classes OLSKDecorButtonNoStyle', function () {
		browser.assert.hasClass(OLSKReloadButton, 'OLSKDecorButtonNoStyle')
	});

	describe('OLSKReloadButtonImage', function test_OLSKReloadButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ OLSKReloadButtonImage } #_OLSKSharedCloud`, 1);
		});

	});

});
