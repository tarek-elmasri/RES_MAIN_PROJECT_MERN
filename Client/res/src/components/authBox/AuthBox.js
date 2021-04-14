import React from 'react'
import useForm from '../forms'
import './AuthBox.css'
import axios from '../../api/Axios'

import { TextField, Button, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
const initialValues = {
  username: "",
  email: "",
  password: ""
}

const useStyles = makeStyles(theme => ({
  root: {

  },
  input: {
    width: '90%',
    margin: theme.spacing(1)
  },
  submit: {
    width: '90%',
    margin: theme.spacing(1)
  },
  form: {
    backgroundColor: '#F2F2F2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1.5),
    borderRadius: '5px',
    border: '.1px solid gray'
  }
}))

function AuthBox({ submitFunc, errors }) {

  const { Form, formValues, setFormValues, onChange } = useForm(initialValues)

  const styles = useStyles()
  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <Typography variant='h5' gutterBottom>
          Welcome
        </Typography>
        <TextField variant='outlined'
          className={styles.input}
          name='email' value={formValues.email}
          placeholder='Email Address'
          label='Email'
          onChange={onChange}

        />

        <TextField variant='outlined'
          name='password' value={formValues.password}
          placeholder='Password' type='password'
          className={styles.input}
          label='Password'
          onChange={onChange}
        />

        <Button variant='contained' color='primary'
          onClick={e => submitFunc(e, formValues)}
          className={styles.submit}
        >
          Log In
        </Button>
      </form>
    </div>
    // <div >
    //   <form className='authBox'>
    //     <input className='authBox__input' name='email'
    //       placeholder='Username' onChange={onChange}
    //       value={formValues.email}
    //     />

    //     <input className='authBox__input' name='password'
    //       placeholder='Password' type='password' onChange={onChange}
    //       value={formValues.password}
    //     />

    //     <button className='authBox__submit' type='submit' onClick={e => submitFunc(e, formValues)}>
    //       Login
    //     </button>

    //   </form>
    // </div>
  )
}

export default AuthBox
