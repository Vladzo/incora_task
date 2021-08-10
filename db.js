const { Sequelize } = require('sequelize');

const { constants: {
    Db_Name, Db_User, Db_Password, Db_Dialect, Db_Host, Db_Port
}} = require('./constants');

module.exports = new Sequelize(
    Db_Name,
    Db_User,
    Db_Password,
    {
        dialect: Db_Dialect,
        host: Db_Host,
        port: Db_Port
    }
)
