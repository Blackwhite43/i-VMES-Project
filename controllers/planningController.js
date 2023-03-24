const Planning = require('./../models/planningModel');
const factory = require('./../controllers/handlerFactory');

exports.createPlanning = factory.createOne(Planning);
exports.getAllPlanning = factory.getAll(Planning);
exports.getPlanning = factory.getOne(Planning);
exports.updatePlanning = factory.updateOne(Planning);
exports.deletePlanning = factory.deleteOne(Planning);