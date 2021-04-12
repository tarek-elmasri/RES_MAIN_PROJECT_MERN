const express = require('express')
const router = express.Router()

const { authenticateUser } = require("../middlewares/tokenValidator")
const { profileController } = require('../controllers')
const { checkProfileForm, validateForm } = require('../middlewares/profileFormValidator')

router.post(
  '/update',
  checkProfileForm,
  [authenticateUser, validateForm],
  profileController.update
)

module.exports = router;