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
    `
}

module.exports = recentAttacksSql;
