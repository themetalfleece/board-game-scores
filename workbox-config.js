module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,js,woff2,woff,ico,html,png,json,txt}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};