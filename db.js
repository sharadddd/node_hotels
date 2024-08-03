const mongoose = require('mongoose')
require('dotenv').config();
const mongooseURL = process.env.db_URL;
mongoose.connect(mongooseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB')
})
db.on('error', (err) => {
    console.error('Error connecting to MongoDB')
})
db.on('disconnected', () => {
    console.log('Disconnected from MongoDB')
})
module.exports = db;