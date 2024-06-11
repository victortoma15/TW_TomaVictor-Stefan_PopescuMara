const db = require("../utils/dbQuery");
const sql = require("../utils/loginSQL");

async function checkExistence(username, password) {
    try {
        const [rows] = await db.promise().query(sql.check, [username, password]);

        if (rows.length > 0) {
            return { exists: true, type: rows[0].type };
        } else {
            return { exists: false };
        }
    } catch (error) {
        console.error("Error checking user existence:", error);
        throw error; 
    }
}



module.exports = {
    checkExistence
};
