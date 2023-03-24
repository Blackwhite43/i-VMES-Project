const line_mapping = require('./../models/linemappingModel');
const factory = require('./../controllers/handlerFactory');

exports.createline_mapping = factory.createOne(line_mapping);
exports.getAllline_mapping = factory.getAll(line_mapping);
exports.getline_mapping = factory.getOne(line_mapping);
exports.updateline_mapping = factory.updateOne(line_mapping);
exports.deleteline_mapping = factory.deleteOne(line_mapping);