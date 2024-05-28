const { getRecentAttacks, getFilteredAttacks } = require('../services/recentAttacksService');

async function recentAttacks(req, res) {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const startYear = parsedUrl.searchParams.get('startYear');
    const endYear = parsedUrl.searchParams.get('endYear');
  console.log(startYear);
  let data;
  if (startYear && endYear) {
    data = await getFilteredAttacks(startYear, endYear);
  } else {
    data = await getRecentAttacks();
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

module.exports = { recentAttacks };
