

const { PERMISSION_TYPES } = require('../constants')



const authStaff = (required_permissions) => (req, res, next) => {

  // if admin -> skip middleware
  if (req.user.role === 'Admin') {
    next()
    return
  }

  // break if not staff
  if (req.user.role !== 'Staff')
    return res.status(401).json({ error: "UnAuthorized" })

  try {
    //chicking valid permision parameter
    if (required_permissions && !(required_permissions instanceof Array))
      throw new Error('Invalid Permission Parameters, Permissions must be passed in Array')

    //getting current user permissions
    const user_permissions = req.user.Permissions.map(user_permission => { return user_permission.type })
    //validating required permission vs user permissions
    const passed = required_permissions.map(required_permission => {
      if (!user_permissions.includes(required_permission)) {
        return false
      }
      return true
    })


    if (passed.includes(false))
      return res.status(401).json({ error: "UnAuthorized" })


  } catch (error) {
    console.log(error);
    return res.status(500).json({ error })
  }
  next()
}

module.exports = authStaff;