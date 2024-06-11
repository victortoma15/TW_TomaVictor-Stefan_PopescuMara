const { addUser } = require('./../services/registerServices');

async function registerUser(req, res) {
    let body = '';

    
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            const requestData = JSON.parse(body);

            const username = requestData.username;
            const password = requestData.password;
            const userType = requestData.userType;

            await addUser(username, password, userType);

            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "message" : "User added to DB" }));
            
        } catch (error) {
            console.error("Error during register:", error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Couldn't add user to DB:(" }));
        }
    });   
}

module.exports = {
    registerUser
};
