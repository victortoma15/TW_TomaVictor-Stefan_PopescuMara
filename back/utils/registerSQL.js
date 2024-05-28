const registerSql = {
    add:
        "INSERT INTO users (username, password, type) VALUES (?, ?, ?)"
   
}

module.exports = registerSql;
