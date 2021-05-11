// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    version: '13.2',
    connection: process.env.DATABASE_URL,
    
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },

    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};

/* 
  host: process.env.HOST_DATABASE,
  database: process.env.NAME_DATABASE,
  port: process.env.PORT_DATABASE,
  user: process.env.USER_DATABASE,
  password: process.env.PASSWORD_DATABASE
*/
