const { getSearchResults } = require('../services/searchServices');

async function recentAttacksbySearch(req, res) {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const query = parsedUrl.searchParams.get('query');

  let data;
  data = await getSearchResults(query);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}


module.exports = { recentAttacksbySearch };
