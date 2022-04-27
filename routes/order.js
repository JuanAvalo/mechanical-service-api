const express = require('express');
const router = express.Router();

const asyncHandler = require('../middlewares/asyncHandler');
const orderController = require('../controllers/order');

router.post('/', asyncHandler(async(req, res) => {
    const { ownerId, carId, servicesId } = req.body;
    const newOrder = await orderController.create(ownerId, carId, servicesId);
    res.status(201).json({'message': newOrder})
}))

module.exports = router;