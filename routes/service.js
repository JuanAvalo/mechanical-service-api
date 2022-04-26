const express = require('express');
const router = express.Router();
const asyncHandler = require('../middlewares/asyncHandler');

const serviceController = require('../controllers/service');

router.post('/', asyncHandler(async (req, res) => {
    const { name, price } = req.body;
    const newService = await serviceController.create(name, price);
    res.status(200).json({'message': newService});
}))

module.exports = router;