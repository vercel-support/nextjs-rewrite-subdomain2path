module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
		{
			"source": "/(.*)",
			"has": [{
				"type": "host",
				"value": "(?<sub>.*)\\.nextjs-rewrite-subdomain2path.vercel-support\\.app"
			}],
			"destination": "/user/:sub",
			permanent: true,
		}
    ]
  },
}
