const mongoose = require('mongoose');
const line_mapping_schema = new mongoose.Schema({
    product_code: {
        type: String
    },
    line: {
        type: String
    }
})
const line_mapping = mongoose.model('line_mapping', line_mapping_schema);
module.exports = line_mapping;