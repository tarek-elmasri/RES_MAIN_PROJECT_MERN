const { body, validationResult } = require('express-validator');
const { PAYMENT_OPTIONS } = require('../constants');

const msgValidationResult = validationResult.withDefaults({
  formatter: (error => { return { [error.param]: error.msg } })
})

const checkProfileForm = [
  body('firstName')
    .isString()
    .withMessage('Firstname field must be of characters.'),
  body('lastName')
    .isString()
    .withMessage('lastName field must be of characters.'),
  body('paymentOption')
    .custom(value => { return !PAYMENT_OPTIONS.includes(value) })
    .withMessage('Invalid payment option.'),
  body('phoneNo')
    .isInt()
    .withMessage('Phone No. must be an Integer value.')
  //TODO : More validation needed
]

const validateForm = (req, res, next) => {
  const errors = msgValidationResult(req).array()

  if (errors.length > 0)
    return res.status(400).json({ errors })

  next();
}

module.exports = {
  checkProfileForm,
  validateForm
}