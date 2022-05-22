global.__path = require('path');
global.__base_path = __path.resolve();
global.__app_path = __path.resolve('app');
global.__core_path = __path.resolve('core');
global.__config_path = __path.resolve('config');
global.__database_path = __path.resolve('database');
global.__routes_path = __path.resolve('routes');
global.Response = require(__core_path + "/response.js");


/**
 * Returns a base path
 *
 * @param {*} path
 *
 * @returns Full path
 */
global.base_path = (path = '') => {
    return __path.resolve(__base_path + '/' + path);
}


/**
 * Returns a app path
 *
 * @param {*} path
 *
 * @returns Full path
 */
global.app_path = (path = '') => {
    return __path.resolve(__app_path + '/' + path);
}


/**
 * Returns a core path
 *
 * @param {*} path
 *
 * @returns Full path
 */
global.core_path = (path = '') => {
    return __path.resolve(__core_path + '/' + path);
}


/**
 * Returns a config path
 *
 * @param {*} path
 *
 * @returns Full path
 */
global.config_path = (path = '') => {
    return __path.resolve(__config_path + '/' + path);
}


/**
 * Returns a databese path
 *
 * @param {*} path
 *
 * @returns Full path
 */
global.database_path = (path = '') => {
    return __path.resolve(__database_path + '/' + path);
}


/**
 * Returns a routes path
 *
 * @param {*} path
 *
 * @returns Full path
 */
global.routes_path = (path = '') => {
    return __path.resolve(__routes_path + '/' + path);
}
