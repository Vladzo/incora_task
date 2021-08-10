const Sequelize = require('sequelize');

const sequelize = new Sequelize("test2", "postgres", "99912", {
    host: 'localhost',
    dialect: "postgres"
});

module.exports = {
    sequelize
};
