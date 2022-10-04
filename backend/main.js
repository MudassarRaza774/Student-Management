const express = require('express')
const app = express()
const studentRoutes = require('./Routes/studentRoutes')
require('dotenv').config()
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log("Backend is running at ", process.env.PORT)
})

app.use('/students', studentRoutes)
