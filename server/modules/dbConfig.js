// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'myteator',
  waitForConnections: true,
  connectionLimit: 30,
  queueLimit: 0
});

pool.query("SELECT * FROM license", function(err, rows, fields) {
  // Connection is automatically released when query resolves
  console.log(rows)
})
