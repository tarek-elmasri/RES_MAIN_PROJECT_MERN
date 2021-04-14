import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'

import AdminHeader from '../../components/adminHeader/AdminHeader'
import { getPermissions, getUsers } from '../../store/actions/UserActions'

const useStyles = makeStyles(theme => ({
  root: {

  },
}))
function AdminPanel() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getUsers(user.tokens.access_token))
  }, [])


  const styles = useStyles();
  return (
    <div>
      <AdminHeader username={user.username} />
    </div>
  )
}

export default AdminPanel
