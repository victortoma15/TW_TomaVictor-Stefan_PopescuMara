const recentAttacksSql = {
    getAttacks:
        `SELECT * 
         FROM attacks 
         ORDER BY iyear DESC, imonth DESC, iday DESC 
         LIMIT 20`,

    getYearFilterAttacks:
      `
        SELECT *
        FROM (
          SELECT *, 
               ROW_NUMBER() OVER (PARTITION BY iyear ORDER BY iyear ASC, imonth ASC, iday ASC) as row_num
            FROM attacks
            WHERE iyear BETWEEN ? AND ?
          ) subquery
        WHERE row_num <= 4
        ORDER BY iyear ASC, imonth ASC, iday ASC
    `,

    getWeaponTypes:
    `
    SELECT DISTINCT weaptype1_txt FROM attacks
    `,

    getWeaponFilterAttacks:
    `
    SELECT *
    FROM attacks
    WHERE weaptype1_txt = ?
    ORDER BY nkill DESC
    LIMIT 20;
    `,

    getRegions:
    `SELECT DISTINCT region_txt FROM attacks`,

    getRegionFilterAttacks:
    `
    SELECT *
    FROM attacks
    WHERE region_txt = ?
    ORDER BY nkill DESC
    LIMIT 20;
    `
}

module.exports = recentAttacksSql;
