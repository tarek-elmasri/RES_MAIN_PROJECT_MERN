const { User } = require('../../db/models')

const update = async (req, res) => {

  const { Profile } = req.user
  const {
    firstName,
    lastName,
    paymentOption,
    phoneNo,
    location
  } = req.body
  try {
    Profile.firstName = firstName
    Profile.lastName = lastName
    Profile.paymentOption = paymentOption || "Cash"
    Profile.phoneNo = phoneNo
    Profile.location = location

    await Profile.save()

    return res.json(Profile)

  } catch (error) {
    console.log(error)
    return res.json({ error })
  }
}


module.exports = {
  update
}