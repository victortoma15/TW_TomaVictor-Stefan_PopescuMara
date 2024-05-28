const db = require("../utils/dbQuery");
const sql = require("../utils/registerSQL");

async function addUser(username, password, type) {
    try {
        const [rows, fields] = await db.promise().query(sql.add, [username, password, type]);
        
        if (rows.length > 0) {
            console.log(username + " " + password + "her");
            return true;
        } else {
            console.log(username + " " + password + "false");
            return false;
        }
    } catch (error) {
        
        console.error("Error adding user:", error);
        throw error; 
    }
}

module.exports = {
    addUser
};
