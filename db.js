const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  port: 5432,
  database: "GonzalesGustiloPeern"
});

// "bcrypt": "^4.0.0",
// "cors": "^2.8.5",
// "dotenv": "^8.2.0",
// "express": "^4.17.1",
// "express-validator": "^6.4.0",
// "jsonwebtoken": "^8.5.1",
// "pg": "^7.18.2"

module.exports = pool;
