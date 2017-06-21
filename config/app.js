const rc = require('rc');

const config =  {
  rolloutServiceHost: process.env['SERVICE_HOST'],
  rolloutServicePort: process.env['SERVICE_PORT'] || 443,
  port: process.env['PORT'],
  googleAuth: rc('gauth', {})
};

module.exports = config;
