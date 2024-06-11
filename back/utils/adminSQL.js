module.exports = {
    getAllArticles: `
        SELECT * FROM attacks WHERE collaborator_username IS NOT NULL
    `,
    deleteArticle: `
        DELETE FROM attacks WHERE id = ?
    `,
    deleteUser: 'DELETE FROM users WHERE username = ?',
    deletePost: 'DELETE FROM attacks WHERE id = ?',
    getAllUsernames: 'SELECT username FROM users'
};
