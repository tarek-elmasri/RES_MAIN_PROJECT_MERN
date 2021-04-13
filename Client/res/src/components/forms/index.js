import { useState } from 'react';


const initialValue = {
  username: "",
  password: "",
  email: ""
}



const useForm = (values = initialValue) => {

  const [formValues, setFormValues] = useState(values)

  const onChange = (e) => {
    console.log(formValues)
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const Form = (props) => {
    const { others, children } = props

    return (
      <form {...others}>
        {children}
      </form>
    )
  }



  return {
    formValues,
    setFormValues,
    Form,
    onChange
  }
}

export default useForm;
