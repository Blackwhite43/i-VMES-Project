const line_mapping = require('./../models/linemappingModel');
const factory = require('./../controllers/handlerFactory');
const catchAsync = require('../utils/catchAsync');

exports.createline_mapping = catchAsync(async (req, res) => {
    var newlinemappingArray = [];
    const ws = await req.body.ws;
    for (i=2;;i++) {
        if (ws[`A${i}`] == undefined) {
            break;
        }
        else {
            const E = ws[`E${i}`]['w'];
            const F = ws[`F${i}`]['w'];
            newlinemappingArray.push({
                product_code: E,
                line: F
            })
        }
    }
    const newlinemapping = await line_mapping.insertMany(newlinemappingArray);
    //console.log(newBOM);
    res.status(201).json({
        status: 'success',
        data: {
            data: newlinemapping
        }
    })
})
//exports.createline_mapping = factory.createOne(line_mapping);
exports.getAllline_mapping = factory.getAll(line_mapping);
exports.getline_mapping = factory.getOne(line_mapping);
exports.updateline_mapping = factory.updateOne(line_mapping);
exports.deleteline_mapping = factory.deleteOne(line_mapping);