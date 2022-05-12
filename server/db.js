const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'zara5151',
  host: 'localhost',
  port: '5432',
  database: 'perntodo'
});

module.exports = pool;
