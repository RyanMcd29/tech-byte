const { Model, Datatypes } = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection');

class Blog_Posts extends Model {}

Blog_Posts.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        body: {
            type: Datatypes.STRING,
            allowNul: false,
        },
        time_created: {
            type: Datatypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_posts'
    }
)

module.exports = Blog_Posts