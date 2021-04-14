import * as api from '../../api'
import { AUTH_USER } from '../constants'

export const login = (form) => (dispatch) => {

  return api.Login(form)
    .then(res => {
      dispatch({
        type: AUTH_USER,
        payload: res.data
      })
      return Promise.resolve(res.data)
    })
    .catch(err => { return Promise.reject(err.response) })
}

export const getPermissions = (access_token) => dispatch => {

  return api.GetPermissions(access_token)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })

}

export const getUsers = (access_token) => dispatch => {
  return api.GetUsers(access_token)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}