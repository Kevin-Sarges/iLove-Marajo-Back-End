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
  },

  production: {
    client: 'pg',
    version: '13.2',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    },

    migrations: {
      tableName: `${__dirname}/migrations`
    }
  }
};
