const mongoose = require('mongoose')

const mongooseURL = 'mongodb://localhost:27017/hotel'
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