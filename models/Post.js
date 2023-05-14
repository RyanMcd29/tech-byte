const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog_Posts extends Model {}

Blog_Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNul: false,
        },
        time_created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
    },
    // {
    //     hooks: {
    //         beforeCreate: async (newPostData) => {
    //             var today = new Date();
    //             var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //             var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //             newPostData.time_created = time+' '+date;

    //             return newPostData
    //         }
    //     }
    // }
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_posts'
    }
)

module.exports = Blog_Posts