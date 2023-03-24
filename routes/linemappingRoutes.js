const express = require('express');
const linemappingController = require('./../controllers/linemappingController');

const router = express.Router();

router.route('/')
    .get(linemappingController.getAllline_mapping)
    .post(linemappingController.createline_mapping)

router.route('/:id')
    .get(linemappingController.getline_mapping)
    .patch(linemappingController.updateline_mapping)
    .delete(linemappingController.deleteline_mapping)

module.exports = router;