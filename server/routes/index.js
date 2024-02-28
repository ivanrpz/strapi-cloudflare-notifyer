module.exports = [
  {
    method: 'GET',
    path: '/status',
    handler: 'myController.getCloudflareStatus',
    config: {
      auth: false
    },
  },
  {
    method: 'GET',
    path: '/raw',
    handler: 'myController.getCloudflareRawStatus',
    config: {
      auth: false
    },
  },
];