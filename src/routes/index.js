const express = require('express');
const router = express.Router()
const controllers = require('../controllers')
const userFormValidator = require('../middlewares/userFormValidator')

//create user 
router.post('/auth/create',
  userFormValidator.checkCreateForm,
  userFormValidator.validateForm,
  controllers.usersController.createUser)

//login user
router.post('/auth/login',
  userFormValidator.checkLoginForm,
  userFormValidator.validateForm,
  controllers.usersController.loginUser
)

module.exports = router