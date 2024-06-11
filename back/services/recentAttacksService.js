// recentAttacksService.js
const db = require('../utils/dbQuery');
const sql = require('../utils/recentAttacksSQL');

async function getRecentAttacks(number) {
    try {
        const validNumber = parseInt(number, 10);

        const [rows, fields] = await db.promise().query(sql.getAttacks, validNumber);
        return rows;  
    } catch (error) {
        console.error("Error fetching recent attacks:", error);
        throw new Error('Error fetching recent attacks');
    }
}

async function getFilteredAttacksByYear(startYear, endYear, number) {
    const validNumber = parseInt(number, 10);

    try {
        const [rows,fields] = await db.promise().query(sql.getYearFilterAttacks, [startYear, endYear, validNumber/4]);
        return rows;
    } catch (error) {
        console.error("Error fetching recent attacks:", error);
        throw new Error('Error fetching recent attacks')    ;
    }
}

async function getWeaponTypes() {
    try {
        const [rows, fields] = await db.promise().query(sql.getWeaponTypes);
        return rows;
    } catch (error) {
        console.error("Error fetching weapon types:", error);
        throw new Error('Error fetching weapon types');
    }
}

async function getFilteredAttacksByWeapon(weaponType, numberOfCounts) {
    try {
        const validNumber = parseInt(numberOfCounts, 10);

        const [rows,fields] = await db.promise().query(sql.getWeaponFilterAttacks, [weaponType, validNumber]);
        return rows;  
    } catch (error) {
        console.error("Error fetching recent attacks:", error);
        throw new Error('Error fetching recent attacks');
    }
}

async function getRegions() {
    try {
        const [rows, fields] = await db.promise().query(sql.getRegions);
        return rows;
    } catch (error) {
        console.error("Error fetching regions:", error);
        throw new Error('Error fetching regions');
    }
}

async function getFilteredAttacksByRegion(region, numberOfCounts) {
    try {
        const validNumber = parseInt(numberOfCounts, 10);

        const [rows,fields] = await db.promise().query(sql.getRegionFilterAttacks, [region, validNumber]);
        return rows;   
    } catch (error) {
        console.error("Error fetching recent attacks:", error);
        throw new Error('Error fetching recent attacks');
    }
}



module.exports = {
    getRecentAttacks,getFilteredAttacksByYear,getFilteredAttacksByWeapon,getWeaponTypes,getRegions, getFilteredAttacksByRegion
};
