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
HOST_DATABASE=localhost
NAME_DATABASE=ilove_marajo
PORT_DATABASE=5001
USER_DATABASE=postgres
PASSWORD_DATABASE=081317ks
*/
