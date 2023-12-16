const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    portMain: process.env.PORT_MAIN,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
}
