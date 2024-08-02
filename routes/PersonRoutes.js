const express = require('express')

const router = express.Router();
const Person = require('../models/person')
router.post('/', async (req, res) => {

    try {
        const data = req.body;
        const person = new Person(data);

        const responce = await person.save();
        console.log("data is saved");
        res.status(200).json(responce)

    }

    catch (err) {
        console.log(err);
        res.status(500).json({ message: "error in saving data" });
    }
})

router.get('/', async (req, res) => {
    try {
        const person = await Person.find();
        console.log('dat fetch')
        res.status(200).json(person)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "not find the server" })
    }
})

router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;
        if (worktype == 'chef' || worktype == 'manger' || worktype == 'waiter') {
            const person = await Person.find({ work: worktype });
            console.log('data fetch')
            res.status(200).json(person)
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "not find the server" })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPerson = req.body
        const responce = await Person.findByIdAndUpdate(personId, updatedPerson, {
            new: true,
            runValidators: true
        })
        if (!responce) {
            return res.status(404).json({ error: 'Data Is Not Matched' })
        }
        console.log('data is updated')
        res.status(200).json(responce)
    }

    catch (err) {
        console.log(err)
        res.status(500).json({ error: "not find the server" })
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const responce = await Person.findByIdAndDelete(personId);
        if (!responce) {
            return res.status(404).json({ error: 'Data Is Not Matched' })
        }
        console.log('data is deleted')
        res.status(200).json(responce)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "not find the server" })
    }
})

module.exports = router
