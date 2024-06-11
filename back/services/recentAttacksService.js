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

async function getFilteredAttacksByYear(startYear, endYear) {
    try {
        const [rows,fields] = await db.promise().query(sql.getYearFilterAttacks, [startYear, endYear]);
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

async function getFilteredAttacksByWeapon(weaponType) {
    console.log(weaponType);
    try {
        const [rows,fields] = await db.promise().query(sql.getWeaponFilterAttacks, [weaponType]);
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

async function getFilteredAttacksByRegion(region) {
    console.log(region);
    try {
        const [rows,fields] = await db.promise().query(sql.getRegionFilterAttacks, [region]);
        return rows;  
    } catch (error) {
        console.error("Error fetching recent attacks:", error);
        throw new Error('Error fetching recent attacks');
    }
}



module.exports = {
    getRecentAttacks,getFilteredAttacksByYear,getFilteredAttacksByWeapon,getWeaponTypes,getRegions, getFilteredAttacksByRegion
};
