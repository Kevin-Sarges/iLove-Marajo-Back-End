require("dotenv").config();
const path = require("path");

module.exports = {
  development: {
    username: process.env.USER_DB_DEV,
    password: process.env.PASS_DB_DEV,
    database: process.env.NAME_DB_DEV,
    host: process.env.HOST_DB_DEV,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },

  test: {
    username: process.env.USER_DB_TEST,
    password: process.env.PASS_DB_TEST,
    database: process.env.NAME_DB_TEST,
    host: process.env.HOST_DB_TEST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },

  production: {
    username: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
    host: process.env.HOST_DB,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
