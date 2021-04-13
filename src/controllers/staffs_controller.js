const { User, Permission, Profile } = require('../../db/models')

const index = async (req, res) => {
  return res.send('staff index controller')
}

const getPermissions = (req, res) => {
  return res.json({ permissions: req.user.Permissions })
}

const getUsers = async (req, res) => {
  try {

    const users = await User.findMany()
    return res.json(users)

  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}

const getUsersWithProfiles = async (req, res) => {
  try {
    const users = await User.findMany({ include: Profile })

    return res.json(users)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}


module.exports = {
  index,
  getPermissions,
  getUsers,
  getUsersWithProfiles,

}