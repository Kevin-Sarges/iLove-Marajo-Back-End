// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    version: '13.2',
    connection: {
      host: 'localhost',
      database: 'ilove_marajo',
      port: '5001',
      user: 'postgres',
      password: '081317ks'
    },
    
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },

    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
