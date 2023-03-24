const mongoose = require('mongoose');
const planningSchema = new mongoose.Schema({
    product_name: { // Split?
        type: String
    },
    product_date: {
        type: Date
    },
    qty: {
        type: Number
    },
    customer_name: { //Split?
        type: String
    },
    delivery_date: {
        type: Date
    }
})
const planning = mongoose.model('planning', planningSchema);
module.exports = planning;