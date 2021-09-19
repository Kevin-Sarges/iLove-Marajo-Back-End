require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER_DB_DEV,
    password: process.env.PASS_DB_DEV,
    database: process.env.NAME_DB_DEV,
    host: process.env.HOST_DB_DEV,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    },
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },

  test: {
    username: 'root',
    password: 1234,
    database: 'database_test',
    host: 'localhost',
    dialect: 'mysql'
  },

  production: {
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
    host: process.env.HOST_DB,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    },
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
}