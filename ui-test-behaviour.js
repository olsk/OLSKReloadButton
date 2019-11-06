const { throws, deepEqual } = require('assert');

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

const OLSKReloadButton = '.OLSKReloadButton';

describe('OLSKReloadButtonDiscovery', function testOLSKReloadButtonDiscovery() {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});
	
	it('on startup', function() {
		browser.assert.elements(OLSKReloadButton, 1);
	});

});

describe('OLSKReloadButtonLanguage', function testOLSKReloadButtonLanguage() {

	['en'].forEach(function (languageCode) {

		context(languageCode, function () {

			const uLocalized = function (inputData) {
				return OLSKTestingLocalized(inputData, languageCode);
			};

			before(function() {
				return browser.visit(kDefaultRoute.OLSKRoutePath);
			});

			it('if inputData', async function() { 
				browser.assert.attribute(OLSKReloadButton, 'title', uLocalized('OLSKReloadButtonText'));
				browser.assert.text(OLSKReloadButton, '');
			});

		});
		
	});
});
