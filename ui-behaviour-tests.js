import { throws, deepEqual } from 'assert';

const browser = new OLSKBrowser();
const kDefaultRoutePath = '/modules/OLSKReloadButton';
const OLSKReloadButton = '.OLSKReloadButton';

describe('OLSKReloadButtonDiscovery', function testOLSKReloadButtonDiscovery() {

	before(function() {
		return browser.visit(kDefaultRoutePath);
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
				return browser.visit(kDefaultRoutePath);
			});

			it('if inputData', async function() { 
				browser.assert.attribute(OLSKReloadButton, 'title', uLocalized('OLSKReloadButtonText'));
				deepEqual(browser.query(OLSKReloadButton).textContent, '');
			});

		});
		
	});
});
