require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const secretKey = process.env.secretKey;

const connection = mongoose.connect(process.env.mongoURL);

module.exports = { connection, PORT, secretKey };
