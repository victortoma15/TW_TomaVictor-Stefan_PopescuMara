const { getRecentAttacks, getFilteredAttacksByYear, getFilteredAttacksByWeapon, getWeaponTypes, getRegions, getFilteredAttacksByRegion } = require('../services/recentAttacksService');

async function recentAttacks(req, res) {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const startYear = parsedUrl.searchParams.get('startYear');
    const endYear = parsedUrl.searchParams.get('endYear');
    const weaponType = parsedUrl.searchParams.get('weaponType');
    const region = parsedUrl.searchParams.get('region');
  console.log(startYear);
  let data;
  if (startYear && endYear) {
    data = await getFilteredAttacksByYear(startYear, endYear);
  } else if(weaponType){
    data = await getFilteredAttacksByWeapon(weaponType);
  } else if(region){
    data = await getFilteredAttacksByRegion(region);
  }
  else {
    data = await getRecentAttacks();
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

async function weaponTypes(req, res) {
  try {
      const data = await getWeaponTypes();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
  } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to fetch weapon types' }));
  }
}

async function regions(req, res) {
  try {
      const data = await getRegions();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
  } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to fetch regions' }));
  }
}

module.exports = { recentAttacks,weaponTypes, regions };
