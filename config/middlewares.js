module.exports = [
  'strapi::errors',{
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://storage.googleapis.com','https://dl.airtable.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://storage.googleapis.com','https://dl.airtable.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['https://www.reyescorpionperu.com','http://127.0.0.2:1337']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
