module.exports = (req, res) => {
  res.end({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
      headers: req.headers,
  });   // print all headers, etc.
}
