module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
		{
			"source": "/(.*)",
			"has": [{
				"type": "host",
				"value": "(?<sub>.*)\\.nextjs-rewrite-subdomain2path.vercel-support\\.app"
			}],
			"destination": "/user/:sub",
		}
    ]
  },
}
