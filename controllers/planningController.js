const Planning = require('./../models/planningModel');
const factory = require('./../controllers/handlerFactory');
const catchAsync = require('../utils/catchAsync');
const moment = require('moment');
//exports.createPlanning = factory.createOne(Planning);
exports.createPlanning = catchAsync(async (req, res) => {
    var newPlanningArray = [];
    const ws = await req.body.ws;
    for (i=7;;i++) {
        if (ws[`A${i}`] == undefined) {
            break;
        }
        else {
            const A = moment(ws[`A${i}`]['w'], `DD/MM/YYYY`);
            const B = ws[`B${i}`]['w'];
            const C = ws[`C${i}`]['w'];
            const D = ws[`D${i}`]['w']; 
            newPlanningArray.push({
                production_date: A,
                sequence_number: B,
                planned_qty: C,
                product_code: D
            })
        }
    }
    const newPlanning = await Planning.insertMany(newPlanningArray);
    //console.log(newBOM);
    res.status(201).json({
        status: 'success',
        data: {
            data: newPlanning
        }
    })
})
exports.getAllPlanning = factory.getAll(Planning);
exports.getPlanning = factory.getOne(Planning);
exports.updatePlanning = factory.updateOne(Planning);
exports.deletePlanning = factory.deleteOne(Planning);