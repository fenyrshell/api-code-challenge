'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(128),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(64),
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
            },
            forgotPassword: {
                type: Sequelize.STRING(10),
            },
            token: {
                type: Sequelize.TEXT,
            },
            lastLogin: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            deletedAt: {
                type: Sequelize.DATE
            }
        });
    },


    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};