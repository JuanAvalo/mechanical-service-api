    const { check } = require("express-validator");
    const errorWrapperFunction = require('.')

    module.exports = {      
      createService : [
        check("name").notEmpty().withMessage("Service name is required)"),
        check("price").notEmpty().isNumeric().withMessage("Service price is required (number)"),
        errorWrapperFunction,
      ]
    };
    