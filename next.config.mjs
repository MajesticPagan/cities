import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "flagcdn.com",
			},
			{
				protocol: "https",
				hostname: "*.wikimedia.org",
			},
		],
	},
};

export default withNextIntl(nextConfig);
