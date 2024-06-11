module.exports = {
    addArticle: `
        INSERT INTO attacks (collaborator_username, iyear, imonth, iday, country_txt, region_txt, city, summary, weaptype1_txt, gname, nkill) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    getArticlesByCollaborator: `
        SELECT * FROM attacks WHERE collaborator_username = ?
    `,
    deleteArticle: `
        DELETE FROM attacks WHERE id = ?
    `
};
