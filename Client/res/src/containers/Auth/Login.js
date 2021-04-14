import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as userActions from '../../store/actions/UserActions'
import { useHistory } from 'react-router-dom'

import AuthBox from '../../components/authBox/AuthBox'
import './Login.css'

function Login() {
  const history = useHistory();
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [resErrors, setResErrors] = useState(null)

  const onSubmit = (e, formValues) => {
    e.preventDefault()

    dispatch(userActions.login(formValues))
      .then(res => {
        console.log(res)
        history.push('/adminPanel')
      })
      .catch(err => {
        console.log(err)
        setResErrors(err)
      })
  }


  return (
    <div style={{ height: '100vh', background: "#F2F2F2" }}>
      <div className='Login' >
        <AuthBox submitFunc={onSubmit} errors={resErrors} />
      </div>
    </div>
  )
}

export default Login
