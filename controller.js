exports.OLSKControllerRoutes = function() {
	return [
		{
			OLSKRouteSignature: 'OLSKReloadButtonStubRoute',
			OLSKRoutePath: '/stub/OLSKReloadButton',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction (req, res, next) {
				return res.render(require('path').join(__dirname, 'stub-view'));
			},
			OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
		},
	];
};
