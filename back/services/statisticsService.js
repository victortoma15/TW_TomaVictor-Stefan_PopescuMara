const db = require('../utils/dbQuery');
const sql = require('../utils/statisticsSQL');

async function getAttacksByRegion() {
    try {
        const [rows, fields] = await db.promise().query(sql.getAttacksByRegion);
        return rows;
    } catch (error) {
        console.error("Error fetching attacks by region:", error);
        throw new Error('Error fetching attacks by region');
    }
}

async function getAttacksByMethod() {
    try {
        const [rows, fields] = await db.promise().query(sql.getAttacksByMethod);
        return rows;
    } catch (error) {
        console.error("Error fetching attacks by method:", error);
        throw new Error('Error fetching attacks by method');
    }
}

async function getAttacksByWeapon() {
    try {
        const [rows, fields] = await db.promise().query(sql.getAttacksByWeapon);
        return rows;
    } catch (error) {
        console.error("Error fetching attacks by weapon:", error);
        throw new Error('Error fetching attacks by weapon');
    }
}

async function getAttacksByYear() {
    try {
        const [rows, fields] = await db.promise().query(sql.getAttacksByYear);
        return rows;
    } catch (error) {
        console.error("Error fetching attacks by year:", error);
        throw new Error('Error fetching attacks by year');
    }
}

module.exports = {
    getAttacksByRegion,
    getAttacksByMethod,
    getAttacksByWeapon,
    getAttacksByYear
};
