require('dotenv-expand').expand(require('dotenv').config());
let env = process.env;


module.exports = {
    name: env.API_NAME,
    protocol: env.API_PROTOCOL ? env.API_PROTOCOL : 'http',
    host: env.API_HOST ? env.API_HOST : 'localhost',
    port: env.API_PORT ? env.API_PORT : '',
    path: env.API_PATH ? env.API_PATH : '/api/v1',
    url: (env.API_PROTOCOL + '://' + env.API_HOST + (env.API_PORT ? (':' + env.API_PORT) : '') + env.API_PATH)
};
