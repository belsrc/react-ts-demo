const path = require('path');

// paths
module.exports.OUTPUT_PATH = path.join(__dirname, '../dist');
module.exports.ENTRY_PATH = path.join(__dirname, '../src');

// env
const env = process.env.NODE_ENV || 'development';

module.exports.ENV = env;
module.exports.IS_PRODUCTION = env === 'production';
