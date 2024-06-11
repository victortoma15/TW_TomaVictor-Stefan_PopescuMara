const { getAllArticlesService, deleteArticleService, getAllUsernames, deletePostService, deleteUserService } = require('../services/adminServices.js');

async function getAllArticles(req, res) {
    try {
        const articles = await getAllArticlesService();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ articles }));
    } catch (error) {
        console.error("Error fetching all articles:", error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Failed to fetch articles' }));
    }
}

async function deleteUser(req, res) {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            const requestData = JSON.parse(body);
            const username = requestData.username;

            await deleteUserService(username);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User deleted successfully' }));
        } catch (error) {
            console.error("Error deleting user:", error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Failed to delete user' }));
        }
    });
}

async function deletePost(req, res) {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            const requestData = JSON.parse(body);
            const postId = requestData.postId;

            await deletePostService(postId);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Post deleted successfully' }));
        } catch (error) {
            console.error("Error deleting post:", error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Failed to delete post' }));
        }
    });
}

async function fetchUsernames(req, res) {
    try {
        const usernames = await getAllUsernames();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ usernames }));
    } catch (error) {
        console.error("Error fetching usernames:", error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Failed to fetch usernames' }));
    }
}

module.exports = {
    getAllArticles,
    deletePost,
    deleteUser,
    fetchUsernames
};
