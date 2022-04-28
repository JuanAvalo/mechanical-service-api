const { check } = require("express-validator");
const errorWrapperFunction = require('.')

module.exports = {   
  createOrder : [
    check("ownerId").notEmpty().isNumeric().withMessage("ownerId is required (number)"),
    check("carId").notEmpty().isNumeric().withMessage("carId is required (number)"),
    check("servicesId").notEmpty().isArray().withMessage("servicesId are required (Array)"),
    errorWrapperFunction,
  ]
};
