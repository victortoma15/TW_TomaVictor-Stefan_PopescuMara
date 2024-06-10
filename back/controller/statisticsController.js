const { getAttacksByRegion, getAttacksByMethod, getAttacksByWeapon } = require('../services/statisticsService');

async function attacksByRegion(req, res) {
    try {
        const data = await getAttacksByRegion();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
    }
}

async function attacksByMethod(req, res) {
    try {
        const data = await getAttacksByMethod();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
    }
}

async function attacksByWeapon(req, res) {
    try {
        const data = await getAttacksByWeapon();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
    }
}

module.exports = {
    attacksByRegion,
    attacksByMethod,
    attacksByWeapon,
};
