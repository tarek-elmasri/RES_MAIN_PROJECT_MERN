const express = require('express')
const router = express.Router()

const { authenticateUser } = require("../middlewares/tokenValidator")
const { profileController } = require('../controllers')


router.post('/update',
  authenticateUser,
  profileController.update)

module.exports = router;