/* module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'escorpion-db.csogxxv5r9m2.us-east-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'e-commerce'),
      user: env('DATABASE_USERNAME', 'anderson_dev'),
      password: env('DATABASE_PASSWORD', '3SC0RP10N$$'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
}); */
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3307),
      database: env('DATABASE_NAME', 'escorpion_ecommerce'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', ''),
      //ssl: env.bool('DATABASE_SSL', true),
    },
  },
});