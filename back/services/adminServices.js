const db = require("../utils/dbQuery");
const sql = require("../utils/adminSQL");

async function deleteUserService(username) {
    try {
        const [result] = await db.promise().query(sql.deleteUser, [username]);
        return result;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
}

async function deletePostService(postId) {
    try {
        const [result] = await db.promise().query(sql.deletePost, [postId]);
        return result;
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
}

async function getAllUsernames() {
    try {
        const [rows] = await db.promise().query(sql.getAllUsernames);
        return rows.map(row => row.username);
    } catch (error) {
        console.error("Error fetching usernames:", error);
        throw error;
    }
}

async function getAllArticlesService() {
    try {
        const [rows] = await db.promise().query(sql.getAllArticles);
        return rows;
    } catch (error) {
        console.error("Error fetching all articles:", error);
        throw error;
    }
}

async function deleteArticleService(articleId) {
    try {
        const [result] = await db.promise().query(sql.deleteArticle, [articleId]);
        return result;
    } catch (error) {
        console.error("Error deleting article:", error);
        throw error;
    }
}

module.exports = {
    getAllArticlesService,
    deleteArticleService,
    deleteUserService,
    deletePostService,
    getAllUsernames
};
