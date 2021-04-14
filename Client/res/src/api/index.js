import axios from './Axios'

export const Login = (form) => axios.post('/auth/login', form)

export const GetPermissions = (access_token) => axios.get('/adminPanel', { headers: { Authorization: `Bearer ${access_token}` } })

export const GetUsers = (access_token) => axios.get('/adminPanel/get_users', { headers: { Authorization: `Bearer ${access_token}` } })