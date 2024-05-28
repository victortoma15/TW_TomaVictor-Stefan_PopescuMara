const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key_here';

async function sendingData(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if (!token) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'No token provided' }));
        return;
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            res.writeHead(403, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Failed to authenticate token' }));
            return;
        }

        const profileData = {
            username: decoded.username
        };

        console.log(profileData.username);
        console.log(profileData);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(profileData));
    });
}

module.exports = { sendingData };
