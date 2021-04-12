const express = require('express');
const router = express.Router()
const { usersController } = require('../controllers')
const userFormValidator = require('../middlewares/userFormValidator')

//create user 
router.post('/create',
  userFormValidator.checkCreateForm,
  userFormValidator.validateForm,
  usersController.createUser)

//login user
router.post('/login',
  userFormValidator.checkLoginForm,
  userFormValidator.validateForm,
  usersController.loginUser
)

module.exports = router