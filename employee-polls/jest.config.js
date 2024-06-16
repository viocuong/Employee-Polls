module.exports = {
	testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
	coverageDirectory: 'coverage',
	moduleNameMapper: {
		'.+\\.(png|jpg|css)$': 'identity-obj-proxy',
	},
	testEnvironment: 'jsdom',
	collectCoverage: true,
};
