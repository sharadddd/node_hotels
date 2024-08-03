const express = require('express')

const app = express();
const db = require('./db')
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3005;
app.get('/', (req, res) => {
    res.send("WELCOME to our hotel");
})

const personRoute = require('./routes/PersonRoutes')
const itemRoute = require('./routes/menuItemRoutes')
app.use('/person', personRoute)
app.use('/item', itemRoute)


app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})