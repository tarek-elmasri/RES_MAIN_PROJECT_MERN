const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/tokenValidator')
const authStaff = require('../middlewares/permissions')
const staffsCOntroller = require('../controllers/staffs_controller')
router.get('/',
  [
    authenticateUser,
    authStaff()
  ],
  staffsCOntroller.index
)

module.exports = router;