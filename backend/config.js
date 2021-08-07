module.exports = config = {
    server: {
        PORT: 3005,
    },
    database: {
        MONGO_URL: 'mongodb://localhost:27017',
        DB_NAME: 'chatDB'
    },
    auth:{
        ACCESS_TOKEN_SECRET: "66f9c9307ed2eee9adc1d6a2122853fa5c8cfc78b7c790decc43b4650f81b166",
        REFRESH_TOKEN_SECRET: "a605c2786c39c2de42ff95c1f1e0d6a02ee2a13214e040984e15415fac549451",
        TOKEN_EXPIRATION: 72 //hours
    }
}