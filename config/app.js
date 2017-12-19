const dotenv = require('dotenv');
dotenv.load({silent: true});

const config =  {
  rolloutServiceHost: process.env['SERVICE_HOST'],
  rolloutServicePort: process.env['SERVICE_PORT'] || 443,
  port: process.env['PORT'],
  googleAuth: {
    clientId: process.env['GAPI_CLIENT_ID']
  }
};

module.exports = config;
