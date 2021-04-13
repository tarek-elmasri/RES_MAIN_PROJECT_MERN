import React from 'react'
import useForm from '../forms'
import './AuthBox.css'

const initialValues = {
  username: "",
  email: "",
  password: ""
}

function AuthBox() {

  const { Form, formValues, setFormValues, onChange } = useForm(initialValues)

  const onSubmit = () => {

  }

  return (
    <div className='authBox'>
      <Form>
        <input className='authBox__input' name='username'
          placeholder='Username' onChange={onChange}
          value={formValues.username}
        />

        <input className='authBox__input' name='password'
          placeholder='Password' type='password' onChange={onChange}
          value={formValues.password}
        />

        <button className='authBox__submit' type='submit' onClick={onSubmit}>
          Login
        </button>

      </Form>
    </div>
  )
}

export default AuthBox
