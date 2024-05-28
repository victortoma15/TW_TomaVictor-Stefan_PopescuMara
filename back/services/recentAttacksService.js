// recentAttacksService.js
const db = require('../utils/dbQuery');
const sql = require('../utils/recentAttacksSQL');

async function getRecentAttacks() {
    try {
        const [rows, fields] = await db.promise().query(sql.getAttacks);
        return rows;  
    } catch (error) {
        console.error("Error fetching recent attacks:", error);
        throw new Error('Error fetching recent attacks');
    }
}

async function getFilteredAttacks(startYear, endYear) {
    try {
        const [rows,fields] = await db.promise().query(sql.getYearFilterAttacks, [startYear, endYear]);
        return rows;  
    } catch (error) {
        console.error("Error fetching recent attacks:", error);
        throw new Error('Error fetching recent attacks')    ;
    }
}


module.exports = {
    getRecentAttacks,getFilteredAttacks
};
