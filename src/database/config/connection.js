const { Pool } = require('pg');
require('dotenv').config();

let URL = '';

// if (!DB_URL) throw new Error('No Database url .. ');

switch (process.env.NODE_ENV) {
  case 'production':
    URL = process.env.DATABASE_URL;
    break;
  case 'test':
    URL = process.env.DB_URL;
    break;
  default:
    throw new Error('No Database url .. ');
    break;
}

const options = {
  connectionString: URL,
  ssl: process.env.NODE_ENV === 'production',
};

const pool = new Pool(options);

module.exports = pool;
