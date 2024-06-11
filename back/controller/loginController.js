const { checkExistence} = require('../services/loginServices.js');
const jwt = require('jsonwebtoken');

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

            const user = await checkExistence(username, password);

            if (user.exists) {
                const token = jwt.sign({ username: username, userType: user.type }, SECRET_KEY, { expiresIn: '1h' });
                console.log(requestData);
                console.log(`User Type: ${user.type}`);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ token: token, type: user.type }));
            } else {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: "Invalid username or password" }));
            }
        } catch (error) {
            console.error("Error in login:", error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Internal server error" }));
        }
    });
}

module.exports = {
    login
};
