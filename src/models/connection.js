const mysql = require('mysql2/promise');

const dotenv = require('dotenv');

const result = dotenv.config();

console.log(result);

console.log(process.env.MYSQL_HOST)
console.log(process.env.MYSQL_USER)
console.log(process.env.MYSQL_PASSWORD)
console.log(process.env.MYSQL_DB)

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

module.exports = connection; 