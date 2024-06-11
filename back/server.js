const http = require('http');
const fs = require('fs');
const path = require('path');
const { login } = require('./controller/loginController');
const { registerUser } = require('./controller/registerController');
const { sendingData } = require('./controller/profileController');
const { attacksByRegion, attacksByMethod, attacksByWeapon } = require('./controller/statisticsController'); // Ensure this import is correct
const { recentAttacks, weaponTypes, regions } = require('./controller/recentAttacksController');
const { recentAttacksbySearch } = require('./controller/searchController');
const { log } = require('console');

const server = http.createServer((req, res) => {
    if (req.url === '/login' && req.method === 'POST') {
        login(req, res);
    } else if (req.url === '/register' && req.method === 'POST') {
        registerUser(req, res);
    } else if (req.url === '/' && req.method === 'GET') {
        serveFile(res, path.join(__dirname, 'front', 'login.html'), 'text/html');
    } else if (req.url === '/main' && req.method === 'GET') {
        serveFile(res, path.join(__dirname, 'front', 'index.html'), 'text/html');
    } else if (req.url === '/register' && req.method === 'GET') {
        serveFile(res, path.join(__dirname, 'front', 'signup.html'), 'text/html');
    } else if (req.url === '/profile' && req.method === 'GET') {
        serveFile(res, path.join(__dirname, 'front', 'collabProfile.html'), 'text/html');
    } else if (req.url === '/recentAttacks' && req.method === 'GET') {
        serveFile(res, path.join(__dirname, 'front', 'recent_attacks.html'), 'text/html');
    } else if (req.url === '/searchResults' && req.method === 'GET') {
        serveFile(res, path.join(__dirname, 'front', 'searchResults.html'), 'text/html');
    }else if (req.url === '/api/profile' && req.method === 'GET') {
        sendingData(req, res);
    } else if (req.url === '/statistics' && req.method === 'GET') {
        serveFile(res, path.join(__dirname, 'front', 'statistics.html'), 'text/html');
    } else if (req.url === '/about' && req.method === 'GET') {
        serveFile(res, path.join(__dirname, 'front', 'about.html'), 'text/html');
    } else if (req.url.startsWith('/api/recentAttacks') && req.method === 'GET') {
        recentAttacks(req, res);
    } else if (req.url === '/api/statistics/attacksByRegion' && req.method === 'GET') {
        attacksByRegion(req, res); // Route for fetching statistics data by region
    } else if (req.url === '/api/statistics/attacksByMethod' && req.method === 'GET') {
        attacksByMethod(req, res); // Route for fetching statistics data by method
    } else if (req.url === '/api/statistics/attacksByWeapon' && req.method === 'GET') {
        attacksByWeapon(req, res); // Route for fetching statistics data by weapon
    }else if (req.url === '/api/weaponsType' && req.method === 'GET') {
        weaponTypes(req, res);  
    }else if (req.url.startsWith('/api/searchResults') && req.method === 'GET') {
        recentAttacksbySearch(req, res);
    }else if (req.url === '/api/regions' && req.method === 'GET') {
        regions(req, res);
    }else if (req.url.match('\.css$')) {
        serveFile(res, path.join(__dirname, 'front', req.url), 'text/css');
    } else if (req.url.match('/pictures/')) {
        serveFile(res, path.join(__dirname, 'front', req.url), 'image/jpeg');
    } else if (req.url.match('\.js$')) {
        serveFile(res, path.join(__dirname, 'front', req.url), 'application/javascript'); // Serve JS files
    } else {
        //console.log(req);
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

function serveFile(res, filePath, contentType) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
