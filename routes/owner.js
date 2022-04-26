const express = require('express');
const router = express.Router();
const asyncHandler = require('../middlewares/asyncHandler');

const ownerController = require('../controllers/owner');

router.post('/', asyncHandler(async (req, res) => {
    const { firstName, lastName, personalId } = req.body;
    const newOwner = await ownerController.create(firstName, lastName, personalId);
    res.status(200).json({'message': newOwner});
}))

module.exports = router;