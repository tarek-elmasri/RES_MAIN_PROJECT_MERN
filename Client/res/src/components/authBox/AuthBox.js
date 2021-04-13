import React from 'react'
import useForm from '../forms'
import './AuthBox.css'

import axios from '../../api/Axios'

const initialValues = {
  username: "",
  email: "",
  password: ""
}

function AuthBox() {

  const { Form, formValues, setFormValues, onChange } = useForm(initialValues)

  const onSubmit = (e) => {
    e.preventDefault()

    axios.post('/auth/login', formValues)
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data))
  }

  return (
    <div className='authBox'>
      <form>
        <input className='authBox__input' name='email'
          placeholder='Username' onChange={onChange}
          value={formValues.email}
        />

        <input className='authBox__input' name='password'
          placeholder='Password' type='password' onChange={onChange}
          value={formValues.password}
        />

        <button className='authBox__submit' type='submit' onClick={onSubmit}>
          Login
        </button>

      </form>
    </div>
  )
}

export default AuthBox
