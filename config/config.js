const {config} = require('dotenv');

config();

module.exports = {
    database_url: process.env.DATABASE_URL
}