const express = require('express');
const router = express.Router();
const asyncHandler = require('../middlewares/asyncHandler');
const { list } = require('../controllers/car');

router.get(
  '/',
  asyncHandler(async (req, res) => {
      const cars = await list();
      res.status(200).json({'message': cars});  
    
  })
);

module.exports = router;
