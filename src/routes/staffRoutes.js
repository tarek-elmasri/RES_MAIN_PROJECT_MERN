const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/tokenValidator')
const authStaff = require('../middlewares/permissions')
const staffsController = require('../controllers/staffs_controller')

const { PERMISSION_TYPES } = require('../constants')

router.get('/',
  [
    authenticateUser,
    authStaff()
  ],
  staffsController.getPermissions
)

router.get('/get_users',
  [
    authenticateUser,
    authStaff([
      PERMISSION_TYPES.SHOW_USERS
    ])
  ],
  staffsController.getUsers
)

router.get('/get_users_with_profiles',
  [
    authenticateUser,
    authStaff([
      PERMISSION_TYPES.SHOW_USERS,
      PERMISSION_TYPES.SHOW_USERS_PROFILE
    ])
  ],
  staffsController.getUsersWithProfiles
)
module.exports = router;