module.exports = {
    Port: process.env.Port || 3000,
    Unknown_Error: 'Unknown error',
    Route_Not_Found: 'Route not found',
    Db_Name: process.env.Db_Name || 'test',
    Db_User: process.env.Db_User || 'root',
    Db_Password: process.env.Db_Password || '',
    Db_Host: process.env.Db_Host || 'localhost',
    Db_Port: process.env.Db_Port || 5432,
    Db_Dialect: 'postgres',
    SALT: 10,
}
