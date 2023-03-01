const Blog_Post = require('./Post');
const User = require('./User')
const Comment = require('./Comment')

User.hasMany(Blog_Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Blog_Post.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Blog_Post.hasMany(Comment, {
    foreignKey: 'blog_post_id',
    onDelete: 'CASCADE',
})

Comment.hasOne(Blog_Post, {
    foreignKey: 'blog_post_id'
})

module.exports = { Blog_Post, User };