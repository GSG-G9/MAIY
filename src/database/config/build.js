const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');

const runBuild = () => {
  let sql = '';
  if (process.env.NODE_ENV === 'test') {
    sql = readFileSync(join(__dirname, 'test-build.sql')).toString();
  }
  // else if (process.env.NODE_ENV === 'development') {
  //   sql = readFileSync(join(__dirname, 'build.sql')).toString();
  // }
  // eslint-disable-next-line no-console
  console.log('connection');
  return connection.query(sql);
};

module.exports = { runBuild };
