const mongoose = require('mongoose');
const BOMSchema = new mongoose.Schema({
    product: {
        type: String
    },
    parts: {
        type: Array
    }
})
const BOM = mongoose.model('BOM', BOMSchema)
module.exports = BOM;