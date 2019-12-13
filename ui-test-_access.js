const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKReloadButton: '.OLSKReloadButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKReloadButton_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKReloadButton', function () {
		browser.assert.elements(OLSKReloadButton, 1);
	});

});