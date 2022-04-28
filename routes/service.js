const express = require('express');
const router = express.Router();
const asyncHandler = require('../middlewares/asyncHandler');
const validate = require('../middlewares/validations/service');
const serviceController = require('../controllers/service');

router.post('/', validate.createService, asyncHandler(async (req, res) => {
    const { name, price } = req.body;
    const newService = await serviceController.create(name, price);
    res.status(201).json({'message': newService});
}))

module.exports = router;