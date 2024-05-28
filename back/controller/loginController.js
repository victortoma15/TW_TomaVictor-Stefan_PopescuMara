const { checkExistence } = require('../services/loginServices.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET_KEY = 'your_secret_key_here';
async function login(req, res) {
    let body = '';
    
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            const requestData = JSON.parse(body);

            const username = requestData.username;
            const password = requestData.password;

            const userExists = await checkExistence(username, password);

            if (userExists) {
                const token = jwt.sign({ username: username }, SECRET_KEY, { expiresIn: '1h' });
                console.log(token);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ token: token }));
            } else {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: "Invalid username or password" }));
            }
        } catch (error) {
            console.error("Error during login:", error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Internal Server Error" }));
        }
    });
}

module.exports = {
    login
};
