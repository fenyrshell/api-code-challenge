'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Ideas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(128)
            },
            image: {
                allowNull: true,
                type: Sequelize.STRING(128)
            },
            username: {
                allowNull: true,
                type: Sequelize.STRING(128)
            },
            rating: {
                allowNull: false,
                type: Sequelize.INTEGER,
                default: 0
            },
            score: {
                allowNull: false,
                type: Sequelize.INTEGER,
                default: 0
            },
            assignees: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            workflow: {
                allowNull: false,
                type: Sequelize.TEXT
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
        await queryInterface.dropTable('CitIdeasies');
    }
};
