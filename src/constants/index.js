const RESERVED_EMAILS = ['admin@myhost.com', 'adminstration@myhost.com', 'no-reply@myhost.com']
const RESERVRED_USERNAMES = ['admin', 'adminstration', 'hr', 'no-reply']
const PAYMENT_OPTIONS = ['Cash', 'Credit Card', 'Mada']
//const PERMISSION_TYPES = [
//  'CREATE_USERS', 'SHOW_USERS', 'UPDATE_USERS', 'DELETE_USERS', 'SHOW_USERS_PROFILES',

//]

const PERMISSION_TYPES = {
  CREATE_USERS: "CREATE_USERS",
  SHOW_USERS: 'SHOW_USERS',
  UPDATE_USERS: 'UPDATE_USERS',
  DELETE_USERS: 'DELETE_USERS',
  SHOW_USERS_PROFILE: 'SHOW_USERS_PROFILES'
}
module.exports = {
  RESERVED_EMAILS,
  RESERVRED_USERNAMES,
  PERMISSION_TYPES,
  PAYMENT_OPTIONS
}