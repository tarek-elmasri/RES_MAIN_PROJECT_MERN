import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: "gray",
    padding: '10px'
  },

}))
function AdminHeader({ username }) {


  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Typography variant='h3'>
        Welcome {username}
      </Typography>
    </div>
  )
}

export default AdminHeader
