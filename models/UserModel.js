const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.STRING
    }
});

module.exports = User;
