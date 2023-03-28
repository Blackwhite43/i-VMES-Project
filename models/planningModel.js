const mongoose = require('mongoose');
const planningSchema = new mongoose.Schema({
    /*product_name: { // Split?
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
    }*/
    production_date: {
        type: Date
    },
    sequence_number: {
        type: Number
    },
    planned_qty: {
        type: Number
    },
    product_code: {
        type: String
    }
})
const planning = mongoose.model('planning', planningSchema);
module.exports = planning;