//_ OLSKControllerRoutes

exports.OLSKControllerRoutes = function() {
	return [
		{
			OLSKRouteSignature: 'OLSKReloadButtonRoute',
			OLSKRoutePath: '/stub/OLSKReloadButton',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction: function(req, res, next) {
				return res.render(req.OLSKLive.OLSKLivePathJoin(__dirname, 'stub-view'));
			},
			OLSKRouteLanguages: ['en'],
			OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
		},
	];
};
