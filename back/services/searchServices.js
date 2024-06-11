const db = require('../utils/dbQuery');
const sql = require('../utils/searchSQL');

async function getSearchResults(query) {
    try {
        const [rows, fields] = await db.promise().query(sql.getAttacksBySearch, [query, query, query, query]);
        const [rows2, fields2] = await db.promise().query(sql.countGroupes, [query]);
        const [rows3, fields3] = await db.promise().query(sql.countLocation, [query,query]);
        const [rows4, fields4] = await db.promise().query(sql.countGname, [query]);

        return [rows, rows2, rows3, rows4];  
    } catch (error) {
        console.error("Error fetching recent attacks:", error);
        throw new Error('Error fetching recent attacks');
    }
}

module.exports = {
    getSearchResults
};
