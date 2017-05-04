const pgp = require('pg-promise')();

let db;

if(process.env.NODE_ENV === 'database' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'auction_development',
    port: 5432,
    host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp({
    database: 'auction_production',
    port: 5432,
    host: 'localhost',
  });
}

module.exports = db;