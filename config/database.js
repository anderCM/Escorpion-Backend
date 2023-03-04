module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', proccess.env.DB_HOST),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', proccess.env.DB_NAME),
      user: env('DATABASE_USERNAME', proccess.env.DB_USER),
      password: env('DATABASE_PASSWORD', proccess.env.DB_PASSWORD),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
