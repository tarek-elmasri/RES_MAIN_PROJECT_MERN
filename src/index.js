require('dotenv').config()
const express = require('express');
const morgan = require('morgan');

const router = require('./routes')
const { sequelize } = require('../db/models')

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use('/', router)













const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`)
  try {
    await sequelize.sync({ force: true })
    console.log('Database Sync done successfully')

  } catch (error) {
    console.log(error)
  }
})