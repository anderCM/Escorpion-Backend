module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '34.67.0.249'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'db-e-commerce'),
      user: env('DATABASE_USERNAME', 'admin_escorpion'),
      password: env('DATABASE_PASSWORD', '3SC0RP10Ns$$'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
/* module.exports = ({ env }) => ({
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
}); */