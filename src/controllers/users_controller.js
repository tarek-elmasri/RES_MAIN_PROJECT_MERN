const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { User, Profile, Permission } = require('../../db/models')
const { PERMISSION_TYPES } = require('../constants')

// function to create new token
const createToken = (payload, expiresIn = null) => {
  const exp = new Date()
  const secret = process.env.SECRET_KEY
  return jwt.sign(payload, secret, expiresIn)
}

//function to build response payload with user data
const responseBuilder = (user) => {
  const resPayload = {
    uuid: user.uuid,
    email: user.email,
    username: user.username,
    emailVerified: user.emailVerified,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    profile: user.Profile,
  }
  resPayload['tokens'] = { bearer_type: 'Bearer', access_token: createToken(resPayload, { expiresIn: '30day' }) }
  return resPayload
}


const createUser = async (req, res) => {
  const { email, password, username } = req.body

  //checking if email already exists
  let user = await User.findOne({ where: { email: email } })
  if (user) {
    return res.status(401).json({ errors: [{ email: "Email already exists" }] })
  }

  try {

    const hashedPassword = await bcrypt.hash(password, 10)
    user = await User.build({ email: email, username: username, password: hashedPassword, Profile: {} }, { include: Profile })
    user.token = createToken({ uuid: user.uuid, email: user.email });
    await user.save()

    //creating new token with expiry date
    // TODO ## saving this token in redis database

    return res.json(responseBuilder(user))

  } catch (error) {

    console.log(error)
    return res.status(500).json({ error: "Somethingwent wrong" })
  }

}


const loginUser = async (req, res) => {

  const { email, password } = req.body

  try {
    const user = await User.findOne({ where: { email: email }, include: Profile })
    if (user && bcrypt.compare(password, user.password)) {
      //TODO savie in redis database)
      return res.json(responseBuilder(user))

    } else {
      return res.status(401).json({ error: "Invalid Username or Password." })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}
module.exports = {
  createUser,
  loginUser
}