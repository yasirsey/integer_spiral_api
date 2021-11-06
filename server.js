const express = require('express')

//Environment Variables
require('dotenv').config()

//Connect to database
require('./config/database').connect()

const app = express()
app.use(express.json())

//Middlewares of API Routers
app.use('/api', require('./routers'))

app.listen(process.env.PORT, () => {
    console.log(`Server running at ${process.env.PORT}`)
})