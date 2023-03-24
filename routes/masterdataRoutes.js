const express = require('express');
const masterdataController = require('./../controllers/masterdataController');

const router = express.Router();

router.route('/')
    .get(masterdataController.getAllmaster_data)
    .post(masterdataController.createmaster_data)

router.route('/:id')
    .get(masterdataController.getmaster_data)
    .patch(masterdataController.updatemaster_data)
    .delete(masterdataController.deletemaster_data)

module.exports = router;