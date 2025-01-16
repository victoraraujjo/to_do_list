require('dotenv').config()
const mongoose = require('mongoose')

const DATABASE_URI  = process.env.DATABASE_URI

async function connectToDatabase() {
    try {
        await mongoose.connect(DATABASE_URI)
        console.log('Conectado ao MongoDB')
    } catch (err) {
        console.log('Erro ao conectar ao MongoDB:', err)
    }
}

exports.connectToDatabase = connectToDatabase