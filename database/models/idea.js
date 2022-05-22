'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Idea extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Idea.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(128)
        },
        image: {
            allowNull: true,
            type: DataTypes.STRING(128)
        },
        username: {
            allowNull: true,
            type: DataTypes.STRING(128)
        },
        rating: {
            allowNull: false,
            type: DataTypes.INTEGER,
            default: 0
        },
        score: {
            allowNull: false,
            type: DataTypes.INTEGER,
            default: 0
        },
        assignees: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        workflow: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'Idea',
        defaultScope: {
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'deletedAt']
            }
        }
    });
    return Idea;
};
