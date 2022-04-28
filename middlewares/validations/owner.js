const { check } = require("express-validator");
const errorWrapperFunction = require('.')

module.exports = {  
  createOwner : [
    check("firstName").notEmpty().withMessage("Owner firstName is required"),
    check("lastName").notEmpty().withMessage("owner lastName is required"),
    check("personalId").notEmpty().isInt().withMessage("PID is required (number)"),
    errorWrapperFunction,
  ]
};
