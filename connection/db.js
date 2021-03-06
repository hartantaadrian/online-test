const mysql = require("mysql2");
const util = require("util");

const dbProp = require("../prop/db.json");

var pool = mysql.createPool({
  host: process.env.DATABASE_HOST || dbProp.host,
  user: process.env.DATABASE_USERNAME || dbProp.username,
  password: process.env.DATABASE_PASSWORD || dbProp.password,
  database: process.env.DATABASE_NAME || dbProp.databasename,
});

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }

  if (connection) connection.release();

  return;
});

// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query);

module.exports = pool;
