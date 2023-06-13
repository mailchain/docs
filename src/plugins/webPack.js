const webpack = require('webpack');

module.exports = function (context, options) {
	return {
		name: 'custom-webpack-plugin',
		// eslint-disable-next-line
		configureWebpack(config, isServer, utils) {
			config.resolve.fallback = {
				buffer: require.resolve('buffer/'),
			};
			config.plugins = [
				...config.plugins,
				new webpack.ProvidePlugin({
					Buffer: ['buffer', 'Buffer'],
					process: 'process/browser.js',
				}),
			];
		},
	};
};
