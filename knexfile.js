// Update with your config settings.
require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,

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

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  }
};
