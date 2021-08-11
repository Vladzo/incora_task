const express = require('express');
require('dotenv').config();

const sequelize = require('./db');
//const { UserModel } = require('./models');
//const { TestModel } = require('./models');
const { constants: { Port, Unknown_Error, Route_Not_Found } } = require('./constants');
const { userRouter, loginRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/login', loginRouter);

app.use('*', _notFoundHandler);
app.use(_handleErrors);

const start = (async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(Port, () => {
            console.log(`App listen ${Port}`);
        });
    } catch (err) {
        console.log(err);
    }
})();

//start();

function _handleErrors(err, req, res, next) {
    res
        .status(err.status)
        .json({
            message: err.message || Unknown_Error,
            customCode: err.customCode || 0
        });
}

function _notFoundHandler(err, req, res, next) {
    next({
        message: err.message || Route_Not_Found,
        customCode: err.customCode || 0,
        status: err.status || 0
    })
}
