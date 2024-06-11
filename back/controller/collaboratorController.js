const { addArticleService, getArticlesByCollaborator, deleteArticle } = require('../services/collaboratorServices.js');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key_here';

async function addArticle(req, res) {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            const requestData = JSON.parse(body);

            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.verify(token, SECRET_KEY);
            const collaborator_username = decodedToken.username;

            requestData.collaborator_username = collaborator_username;

            await addArticleService(requestData);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Article added successfully' }));
        } catch (error) {
            console.error("Error adding article:", error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Failed to add article' }));
        }
    });
}

async function getCollaboratorArticles(req, res) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, SECRET_KEY);
        const collaborator_username = decodedToken.username;

        const articles = await getArticlesByCollaborator(collaborator_username);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ articles }));
    } catch (error) {
        console.error("Error fetching articles:", error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Failed to fetch articles' }));
    }
}

async function deleteCollaboratorArticle(req, res) {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            const requestData = JSON.parse(body);
            const articleId = requestData.articleId;

            await deleteArticle(articleId);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Article deleted successfully' }));
        } catch (error) {
            console.error("Error deleting article:", error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Failed to delete article' }));
        }
    });
}

module.exports = {
    addArticle,
    getCollaboratorArticles,
    deleteCollaboratorArticle
};
