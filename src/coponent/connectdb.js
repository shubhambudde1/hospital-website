


const mysql = require('mysql2');

// MySQL connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Latur@1059$", // Your password
  database: "hospital"     // Your database
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('MySQL connected...');
});

module.exports = db;
