const express = require('express')
const dbConnection = require('./database/connection')

const app = express()

const PORT = 8080

app.listen(PORT, () => {
    console.log('running')
    dbConnection.connectToDatabase()
})