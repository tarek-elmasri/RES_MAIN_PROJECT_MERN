const express = require('express')
const router = express.Router()

const { authenticateUser } = require("../middlewares/tokenValidator")
const { profileController } = require('../controllers')
const { PERMISSION_TYPES } = require('../constants')
const authStaff = require('../middlewares/permissions')

router.post(
  '/update',
  [authenticateUser, authStaff([
    PERMISSION_TYPES.UPDATE_USERS,
    PERMISSION_TYPES.CREATE_USERS
  ])],
  profileController.update
)

module.exports = router;