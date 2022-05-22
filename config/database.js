require('dotenv-expand').expand(require('dotenv').config());
let env = process.env;


module.exports = {
    use_env_variable: false,
    host: env.DB_HOST ? env.DB_HOST : '127.0.0.1',
    port: env.DB_PORT ? env.DB_PORT : '3306',
    username: env.DB_USERNAME ? env.DB_USERNAME : 'username',
    password: (env.DB_PASSWORD && env.DB_PASSWORD != null) ? env.DB_PASSWORD : null,
    database: env.DB_DATABASE ? env.DB_DATABASE : 'database',
    dialect: env.DB_DIALECT ? env.DB_DIALECT : 'mysql',
    define: {
        underscored: false,
        freezeTableName: false,
        charset: 'utf8mb4',
        dialectOptions: { collate: 'utf8mb4_unicode_ci' },
        timestamps: true,
        paranoid: true
    },
    timezone: env.DB_TIMEZONE ? env.DB_TIMEZONE : '+00:00',
    pool: { max: 5, min: 0, idle: 30000, acquire: 60000 }
};
