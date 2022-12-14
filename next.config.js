/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	eslint: {
		dirs: ['pages', 'components', 'lib', 'styles'],
	},
}

module.exports = nextConfig
