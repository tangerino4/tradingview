const serverless = require('serverless-http');
const app = require('../path-to-your-app'); // Adjust the path to your app
module.exports.handler = serverless(app);
