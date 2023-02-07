const { Pool } = require('pg');
require('dotenv').config();

const config = {

		"username": process.env.DB_USER,
		"password": process.env.DB_PASSWORD,
		"database": process.env.DB_DATABASE,
		"host": process.env.DB_HOST,
		"dialect": process.env.DB_DIALECT,
		"port": process.env.DB_PORT,
    allowExitOnIddle: true

};


const client = new Pool(config);

module.exports = client;