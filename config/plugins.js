
module.exports = {
    upload: {
      config: {
        provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: 'bucket-strapi-e-commerce',
            publicFiles: true,
            uniform: true,
            baseUrl: 'https://storage.googleapis.com/bucket-strapi-e-commerce',
            basePath: ''
        },
      },
    },
}
