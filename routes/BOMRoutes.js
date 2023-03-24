const express = require('express');
const BOMController = require('../controllers/BOMController');

const router = express.Router();

router.route('/')
    .get(BOMController.getAllBOM)
    .post(BOMController.createBOM)

router.route('/:id')
    .get(BOMController.getBOM)
    .patch(BOMController.updateBOM)
    .delete(BOMController.deleteBOM)

module.exports = router;