const express = require('express');
const router = express.Router();
const asyncHandler = require('../middlewares/asyncHandler');
const { list, find, create, destroy, record, patch } = require('../controllers/car');

router.get('/', asyncHandler(async (req, res) => {
      const cars = await list();
      res.status(200).json({'message': cars});    
}))

router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  const car = await find(id);
  res.status(200).json({"message": car})
}))

router.post('/', asyncHandler(async (req, res) => {
  const { ownerId, brand, model, year, plate, color } = req.body;
  const newCar = await create(ownerId, brand, model, year, plate, color);
  res.status(201).json({message: newCar});
}))

router.patch('/:id', asyncHandler(async (req, res) => {
  const { ownerId, brand, model, year, plate, color } = req.body;
  const { id } = req.params;
  const updateCar = await patch(id, ownerId, brand, model, year, plate, color);
  res.status(200).json({'message': updateCar}) 
}))

router.get('/:id/records', asyncHandler(async (req,res) => {
  const { id } = req.params;
  const records = await record(id);
  res.status(200).json({message: records})
}))

router.delete('/:id', asyncHandler(async(req, res) => {
  const { id } = req.params;
  const wasDeleted = await destroy(id);
  res.status(200).json({"message": wasDeleted});
}))

module.exports = router;
