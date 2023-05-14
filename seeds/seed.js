const sequelize = require('../config/connection');

const userSeed = require('./userSeed.json')
const seedPosts = require('./post-seed.json');
const { User } = require('../models');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userSeed, {
        individualHooks: true,
        returning: true
    })

    process.exit(0);
};

seedAll();