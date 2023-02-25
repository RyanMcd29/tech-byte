const { Model, Datatypes } = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        body: {
            type: Datatypes.STRING,
            allowNull: false
        },
        user_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;