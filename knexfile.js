// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    version: '13.2',
    connection: process.env.DATABASE_URL,
    
    migrations: {
      directory: `./dist/database/migrations`
    },

    seeds: {
      directory: `./dist/database/seeds`
    }
  },

  /*production: {
    client: 'pg',
    version: '13.2',
    connection: process.env.DATABASE_URL,

    migrations: {
      tableName: './dist/database/migrations'
    },

    seeds: {
      directory: `./dist/database/seeds`
    }
  }*/
};
