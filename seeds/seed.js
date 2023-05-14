const sequelize = require('../config/connection');

const seedUsers = require('./user-seed.json')
const seedPosts = require('./post-seed.json')

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();
    await seedPosts();

    process.exit(0);
};

seedAll();