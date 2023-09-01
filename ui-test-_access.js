const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKReloadButton: '.OLSKReloadButton',

	OLSKReloadButtonImage: '.OLSKReloadButtonImage',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKReloadButton_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKReloadButton', function () {
		return browser.assert.elements(OLSKReloadButton, 1);
	});

	it('shows OLSKReloadButtonImage', function () {
		return browser.assert.elements(OLSKReloadButtonImage, 1);
	});

});
