const express = require('express');
const router = express.Router();
const asyncHandler = require('../middlewares/asyncHandler');
const validate = require('../middlewares/validations/owner');

const ownerController = require('../controllers/owner');

router.post('/', validate.createOwner, asyncHandler(async (req, res) => {
    const { firstName, lastName, personalId } = req.body;
    const newOwner = await ownerController.create(firstName, lastName, personalId);
    res.status(201).json({'message': newOwner});
}))

module.exports = router;