const {createPool} = require('mysql');


const pool = createPool({
    post: process.env.MYSQL_DB_PORT,
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    connectionLimit: process.env.MYSQL_CONNECTION_LIMIT
});

module.exports =  pool;