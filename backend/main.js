const express = require('express')
const app = express()
const studentRoutes = require('./Routes/studentRoutes')
require('dotenv').config()
const swaggerUiExpress = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

//For Dealing in json Format
app.use(express.json())

//For Swagger UI Setup for API's Documentation
console.info('For API Documentation visit http://localhost:3001/api-docs')
app.use(
    '/api-docs',
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerDocument)
);

//Starting the backend at Port 3001
app.listen(process.env.PORT, () => {
    console.log(`Backend is running at ${process.env.PORT}`)
})

//Calling the routes to deal with API's
app.use('/students', studentRoutes)