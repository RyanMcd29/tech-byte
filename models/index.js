const Blog_Posts = require('./User');
const User = require('./User')

User.hasMany(Blog_Posts, {
    foreignKey: 'user_id'
});

module.exports = { Blog_Posts, User };