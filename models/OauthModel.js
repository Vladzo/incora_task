const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Oauth = sequelize.define("oauth", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    access_token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Oauth.associate = (models) => {
    Oauth.belongsTo(models.user, {foreignKey: 'user_id'});
};

module.exports = Oauth;
