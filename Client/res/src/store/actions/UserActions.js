import * as api from '../../api'
import { AUTH_USER } from '../constants'

export const login = (form, service = api.Login) => (dispatch) => {

  return service(form)
    .then(res => {
      dispatch({
        type: AUTH_USER,
        payload: res.data
      })
      return Promise.resolve(res.data)
    })
    .catch(err => { return Promise.reject(err.response) })
}

export const getPermissions = (access_token, service = api.GetPermissions) => dispatch => {

  return service(access_token)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })

}

export const getUsers = (access_token, service = api.GetUsers) => dispatch => {
  return service(access_token)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}