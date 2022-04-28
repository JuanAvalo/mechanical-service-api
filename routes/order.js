const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validations/order')
const asyncHandler = require('../middlewares/asyncHandler');
const orderController = require('../controllers/order');

router.post('/', validate.createOrder, asyncHandler(async(req, res) => {
    const { ownerId, carId, servicesId } = req.body;
    const newOrder = await orderController.create(ownerId, carId, servicesId);
    res.status(201).json({'message': newOrder})
}))

module.exports = router;