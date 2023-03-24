const master_data = require('./../models/masterdataModel');
const factory = require('./../controllers/handlerFactory');

exports.createmaster_data = factory.createOne(master_data);
exports.getAllmaster_data = factory.getAll(master_data);
exports.getmaster_data = factory.getOne(master_data);
exports.updatemaster_data = factory.updateOne(master_data);
exports.deletemaster_data = factory.deleteOne(master_data);