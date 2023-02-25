const Blog_Posts = require('./User');
const User = require('./User')
const Comment = require('./Comment')

User.hasMany(Blog_Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Post.hasMany(Comment, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE',
})

module.exports = { Blog_Posts, User };