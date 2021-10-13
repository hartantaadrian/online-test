var mysql = require("mysql2");

var util = require("util");

// var pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "P@ssw0rd.1",
//   database: "bibit",
// });

var pool = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b5c81dec16d988",
  password: "6916e208",
  database: "heroku_49d27630e877873",
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
