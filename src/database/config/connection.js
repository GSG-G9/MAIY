const { Pool } = require('pg');
require('dotenv').config();

const { DB_URL } = process.env;
if (!DB_URL) throw new Error('No Database url .. ');
const options = {
  connectionString: DB_URL,
  ssl: true,
};
const pool = new Pool(options);
module.exports = pool;

