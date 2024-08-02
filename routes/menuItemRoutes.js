const express = require('express')

const router = express.Router();
const Items = require("../models/Items")

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const item = new Items(data);
        const responce = await item.save();
        console.log("data is saved");
        res.status(200).json(responce)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "not find the server" })
    }
})
router.get('/', async (req, res) => {
    try {
        const items = await Items.find();
        console.log('data fetch')
        res.status(200).json(items)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "not find the server" })
    }
})
router.get('/:tastetype', async (req, res) => {
    try {
        const tastetype = req.params.tastetype;
        if (tastetype == 'sweet' || tastetype == 'sour' || tastetype == 'spicy') {
            const tasteItem = await Items.find({ taste: tastetype });
            console.log('data fetches to Item')
            res.status(200).json(tasteItem)
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "not find the server" })
    }
})

module.exports = router;