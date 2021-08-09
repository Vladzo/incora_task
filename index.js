const express = require('express');
require('dotenv').config();

const { constants: { Port } } = require('./constants');

const app = express();

app.listen(Port, () => {
    console.log(`App listen ${Port}`);
});
