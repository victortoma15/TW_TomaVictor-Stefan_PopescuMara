const db = require("../utils/dbQuery");
const sql = require("../utils/profileSQL");

async function checkExistence(username, password) {
    try {
        const [rows, fields] = await db.promise().query(sql.check, [username, password]);
        
        if (rows.length > 0) {
            console.log(username + " " + password + "her");
            return true;
        } else {
            console.log(username + " " + password + "false");
            return false;
        }
    } catch (error) {
        console.error("Error checking user existence:", error);
        throw error; 
    }
}

module.exports = {
    checkExistence
};
