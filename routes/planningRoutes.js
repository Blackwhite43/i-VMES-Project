const express = require('express');
const planningController = require('./../controllers/planningController');

const router = express.Router();

router.route('/')
    .get(planningController.getAllPlanning)
    .post(planningController.createPlanning)

router.route('/:id')
    .get(planningController.getPlanning)
    .patch(planningController.updatePlanning)
    .delete(planningController.deletePlanning)

module.exports = router;