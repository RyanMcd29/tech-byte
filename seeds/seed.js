const sequelize = require('../config/connection');

const userSeed = require('./userSeed.json')
const postSeed = require('./postSeed.json');
const { User, Post } = require('../models');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userSeed, {
        individualHooks: true,
        returning: true
    })
    
    for (const post of postSeed) {
        await Post.create({
            ...post,
            user_id: users[Math.floor(Math.random() * users.length)].id, 
        });
    }

    process.exit(0);
};

seedAll();