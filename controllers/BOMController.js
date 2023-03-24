const BOM = require('./../models/BOMModel');
const factory = require('./../controllers/handlerFactory');

exports.createBOM = factory.createOne(BOM);
exports.getAllBOM = factory.getAll(BOM);
exports.getBOM = factory.getOne(BOM);
exports.updateBOM = factory.updateOne(BOM);
exports.deleteBOM = factory.deleteOne(BOM);