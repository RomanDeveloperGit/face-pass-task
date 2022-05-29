module.exports = {
	plugins: [
		require('postcss-preset-env')({
			browsers: 'last 5 versions'
		})
	]
};