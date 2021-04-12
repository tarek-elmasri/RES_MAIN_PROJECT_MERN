const { body, validationResult } = require('express-validator');
const { RESERVED_EMAILS, RESERVRED_USERNAMES } = require('../constants')

const msgValidationResult = validationResult.withDefaults({
  formatter: error => { return { [error.param]: error.msg } }
})

const checkCreateForm = [

  body('username').isString()
    .withMessage('Username must be characters')
    .notEmpty()
    .withMessage('Username field is required.')
    .isLength({ min: 4, max: 20 })
    .withMessage('Username must be between 4 to 20 characters.')
    .custom(value => { return !RESERVRED_USERNAMES.includes(value) })
    .withMessage("Username is reserved.")
  ,
  body('email').isEmail()
    .withMessage('Invalid email address format')
    .notEmpty()
    .withMessage('Email field is required.')
    .custom(value => { return !RESERVED_EMAILS.includes(value) })
    .withMessage('Email is reserved'),
  body('password').notEmpty()
    .withMessage('Password field is required.')
    .isLength({ min: 5 })
    .withMessage('Password must be at least of 5 characters')
    .isString()
    .withMessage('Password must be of characters')
]


const validateForm = (req, res, next) => {

  const errors = msgValidationResult(req).array()

  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  next()
}


const checkLoginForm = [
  body('email').isEmail()
    .withMessage('Invalid email address')
    .notEmpty()
    .withMessage('Email field is required.'),
  body('password').notEmpty()
    .withMessage('Password field is required.')
    .isLength({ min: 5 })
    .withMessage('Invalid password')
    .isString()
    .withMessage('Password of invalid data type.')
]


module.exports = {
  checkCreateForm,
  checkLoginForm,
  validateForm,
}