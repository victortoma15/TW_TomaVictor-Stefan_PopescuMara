const db = require("../utils/dbQuery");
const sql = require("../utils/collaboratorSQL");

async function addArticleService(articleData) {
    const {collaborator_username, iyear, imonth, iday, country_txt, region_txt, city, summary, weaptype1_txt, gname, nkill} = articleData;

    try {
        const [result] = await db.promise().query(sql.addArticle, [collaborator_username, iyear, imonth, iday, country_txt, region_txt, city, summary, weaptype1_txt, gname, nkill ]);
        return result;
    } catch (error) {
        console.error("Error adding article:", error);
        throw error;
    }
}

async function getArticlesByCollaborator(collaborator_username) {
    try {
        const [rows] = await db.promise().query(sql.getArticlesByCollaborator, [collaborator_username]);
        return rows;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
}

async function deleteArticle(articleId) {
    try {
        const [result] = await db.promise().query(sql.deleteArticle, [articleId]);
        return result;
    } catch (error) {
        console.error("Error deleting article:", error);
        throw error;
    }
}

module.exports = {
    addArticleService,
    getArticlesByCollaborator,
    deleteArticle
};
