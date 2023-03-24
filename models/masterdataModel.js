const mongoose = require('mongoose');
const master_data_schema = new mongoose.Schema({
    part_code: {
        type: String
    },
    part_name: {
        type: String
    },
    supplier: {
        type: String
    },
    qty_per_box: {
        type: String
    }
})
const master_data = mongoose.model('master_data', master_data_schema);
module.exports = master_data;