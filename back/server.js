const http = require('http');
const fs = require('fs');
const path = require('path');
const { login } = require('./controller/loginController');
const { registerUser } = require('./controller/registerController');
const { sendingData } = require('./controller/profileController');
const { recentAttacks } = require('./controller/recentAttacksController');


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
    } else if (req.url === '/api/profile' && req.method === 'GET') {
        sendingData(req, res);
    }else if (req.url.startsWith('/api/recentAttacks') && req.method === 'GET') {
        console.log(req.url);
        recentAttacks(req, res);
    } else if (req.url.match('\.css$')) {
        serveFile(res, path.join(__dirname, 'front', req.url), 'text/css');
    } else if (req.url.match('/pictures/')) {
        serveFile(res, path.join(__dirname, 'front', req.url), 'image/jpeg');
    } else {
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
