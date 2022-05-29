const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
	const isDevelopment = argv.mode === 'development';

	return {
		entry: ['@babel/polyfill', './src/index.js'],
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.[contenthash].js',
			publicPath: '/'
		},
		devServer: {
			port: 3000,
			historyApiFallback: true
		},
		devtool: "source-map",
		resolve: {
			extensions: [
				'*',
				'.js',
				'.jsx',
				'.json',
				'.css',
				'.scss',
				'.png',
				'.jpg'
			]
		},
		plugins: [
			new HTMLWebpackPlugin({
				template: path.join(__dirname, 'src', 'index.html')
			}),
			new CleanWebpackPlugin()
		],
		module: {
			rules: [
				{
					test: /\.module.(sa|sc|c)ss$/i,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: isDevelopment ? '[local]_[sha1:hash:hex:7]' : '[sha1:hash:hex:7]'
								}
							}
						},
						'postcss-loader',
						'sass-loader'
					]
				},
				{
					test: /^((?!\.module).)*(sa|sc|c)ss$/i,
					use: [
						'style-loader',
						'css-loader',
						'postcss-loader',
						'sass-loader'
					]
				},
				{
					test: /\.(js|jsx)$/i,
					exclude: /node_modules/,
					use: ['babel-loader']
				},
				{
					test: /\.(png|jpeg|jpg|svg|gif)/i,
					type: 'asset/resource'
				},
				{
					test: /\.(ttf|otf|eot|woff|woff2)/i,
					type: 'asset/resource'
				}
			]
		}
	}
}