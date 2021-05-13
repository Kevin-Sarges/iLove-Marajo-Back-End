const knexfile = require('../../knexfile');
const knex = require('knex')(
  process.env.DATABASE_URL === 'postgres://postgres:081317ks@localhost:5001/ilove_marajo'
    ? knexfile.development
    : knexfile.production
);


module.exports = knex;