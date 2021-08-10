const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Test = sequelize.define("test", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Test;
