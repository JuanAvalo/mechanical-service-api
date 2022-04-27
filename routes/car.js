const express = require('express');
const router = express.Router();
const asyncHandler = require('../middlewares/asyncHandler');
const { list, create } = require('../controllers/car');

router.get('/', asyncHandler(async (req, res) => {
      const cars = await list();
      res.status(200).json({'message': cars});  
    
  })
  );
router.post('/', asyncHandler(async (req, res) => {
  const { brand, model, year, plate, color } = req.body;
  const newCar = await create(brand, model, year, plate, color);
  res.status(201).json({message: newCar});
}))

module.exports = router;
