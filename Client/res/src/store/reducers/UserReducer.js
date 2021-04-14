import { AUTH_USER } from "../constants";


const initialValue = {

}

const UserReducer = (state = initialValue, action) => {

  switch (action.type) {

    case AUTH_USER:
      return { ...action.payload, logged_in: true }
    default:
      return state;
  }
}

export default UserReducer;