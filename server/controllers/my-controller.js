'use strict';

module.exports = ({ strapi }) => ({
  getCloudflareStatus(ctx) {
    return strapi
      .plugin('cloudflare-notificator')
      .service('myService')
      .getCloudflareStatus();
  },
  getCloudflareRawStatus(ctx) {
    return strapi
      .plugin('cloudflare-notificator')
      .service('myService')
      .getCloudflareRawStatus();
  }
});
