const mongoose = require('mongoose')

const menuItem = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    taste: {
        type: String,
        enum: ['sweet', 'sour', 'spicy'],
        required: true
    },

    is_drink: {
        type: Boolean,
        default: false
    },

    ingrediant: {
        type: [String],
        default: []
    },

    num_of_sales: {
        type: Number,
        default: 0
    }


})

const Items = mongoose.model('Items', menuItem)
// comment added for git checking working or not
module.exports = Items;