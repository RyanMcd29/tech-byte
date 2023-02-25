const Blog_Posts = require('./User');
const User = require('./User')

User.hasMany(Blog_Posts, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Post.hasMany(Comment, {
    foreignKey: 'comment_id'
})

module.exports = { Blog_Posts, User };