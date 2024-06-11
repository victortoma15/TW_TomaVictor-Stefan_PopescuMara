const searchSql = {
    getAttacksBySearch:
    `
    SELECT *
    FROM attacks
    WHERE country_txt LIKE '%' || ? || '%'
    OR city LIKE '%' || ? || '%'
    OR gname LIKE '%' || ? || '%'
    OR collaborator_username LIKE '%' || ? || '%';
`,
countGroupes:
"select count(*) from attacks where  gname LIKE '%' || ? || '%';",
countLocation:
"select count(*) from attacks where  city LIKE '%' || ? || '%' OR country_txt LIKE '%' || ? || '%';",
countGname:
"select count(*) from attacks where  collaborator_username LIKE '%' || ? || '%';"

};

// const searchSql = {
//     getAttacksBySearch:
//     `
//     SELECT attacks.*, users.username
//     FROM attacks
//     LEFT JOIN users ON attacks.collaborator_id = users.username
//     WHERE summary LIKE '%' || ? || '%'
//     OR country_txt LIKE '%' || ? || '%';
// `,
// };

module.exports = searchSql;
