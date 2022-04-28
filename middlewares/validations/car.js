const { check } = require("express-validator");
const errorWrapperFunction = require('.')

module.exports = {  
  createCar : [
    check("brand").notEmpty().withMessage("Car brand is required"),
    check("model").notEmpty().withMessage("Car model is required"),
    check("year").notEmpty().isNumeric().withMessage("Car year is required (number)"),
    check("plate").notEmpty().withMessage("Car plate is required"),
    check("color").notEmpty().withMessage("Car color is required"),
    check("ownerId").notEmpty().isNumeric().withMessage("Car ownerId is required (number)"),
    errorWrapperFunction,
  ],
  updateCar : [
    check("year").optional().isNumeric().withMessage("Car year must be a (number)"),
    errorWrapperFunction,
  ]
};
