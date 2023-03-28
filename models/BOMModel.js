const mongoose = require('mongoose');
const BOMSchema = new mongoose.Schema({
    product: {
        type: String
    },
    part_code: {
        type: String
    },
    qty: {
        type: Number
    }
})
const BOM = mongoose.model('BOM', BOMSchema)
module.exports = BOM;