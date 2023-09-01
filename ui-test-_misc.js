const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKReloadButton_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('classes OLSKToolbarButton', function () {
		return browser.assert.hasClass(OLSKReloadButton, 'OLSKToolbarButton')
	});

	it('classes OLSKDecorTappable', function () {
		return browser.assert.hasClass(OLSKReloadButton, 'OLSKDecorTappable')
	});
	
	it('classes OLSKDecorButtonNoStyle', function () {
		return browser.assert.hasClass(OLSKReloadButton, 'OLSKDecorButtonNoStyle')
	});

	describe('OLSKReloadButtonImage', function test_OLSKReloadButtonImage () {

		it('sets src', function () {
			return browser.assert.elements(`${ OLSKReloadButtonImage } #_OLSKSharedReload`, 1);
		});

	});

});
