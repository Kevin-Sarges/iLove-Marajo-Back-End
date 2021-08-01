// Update with your config settings.
require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,

    pool: {
      min: 2,
      max: 5
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL_TEST,

    pool: {
      min: 2,
      max: 5
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', '__tests__', 'migrations')
    }
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },

    pool: {
      min: 2,
      max: 5
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  }
};
