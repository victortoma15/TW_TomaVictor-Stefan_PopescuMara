const statisticsSql = {
    getAttacksByRegion:
        `SELECT region_txt, COUNT(*) as attack_count
         FROM attacks
         GROUP BY region_txt
         ORDER BY attack_count DESC`,
    
    getAttacksByMethod:
        `SELECT targtype1_txt, COUNT(*) as attack_count
         FROM attacks
         GROUP BY targtype1_txt
         ORDER BY attack_count DESC`,

    getAttacksByWeapon:
        `SELECT weaptype1_txt, COUNT(*) as attack_count
         FROM attacks
         GROUP BY weaptype1_txt
         ORDER BY attack_count DESC`,

    getAttacksByYear:
        `SELECT iyear, COUNT(*) as attack_count
         FROM attacks
         GROUP BY iyear
         ORDER BY attack_count ASC`
};

module.exports = statisticsSql;
