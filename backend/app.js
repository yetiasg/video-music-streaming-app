const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config');
const { initDB } = require('./helpers/db-connection');

const authRouter = require('./router/auth')

const app =  express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRouter);

app.use((req, res) => {
    res.status(404).json('This route does not exist');
});

app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

// module.exports = app;

initDB(err => {
    if(!err){
        app.listen(config.server.PORT || 3000, () => {
            console.log(`Listening on port: ${config.server.PORT}`)
        })
    }else console.log(`Connection failed. err: ${err}`);
});
