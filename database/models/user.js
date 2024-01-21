'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };


    User.init({
        name: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
        },
        forgotPassword: {
            type: DataTypes.STRING(10),
        },
        token: {
            type: DataTypes.TEXT,
        },
        lastLogin: {
            type: DataTypes.DATE
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
        modelName: 'User',
        defaultScope: {
            attributes: {
                exclude: ['password', 'forgotPassword', 'token', 'lastLogin', 'createdAt', 'updatedAt', 'deletedAt']
            }
        }
    });


    return User;
};