const mongoose = require('mongoose')
require('dotenv').config();
//const mongooseURL = 'mongodb://localhost:27017/hotel'
//const mongooseURL = 'mongodb+srv://sharad_Pandey:sharad1234@cluster0.exxwvkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
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