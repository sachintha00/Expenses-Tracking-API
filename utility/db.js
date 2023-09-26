const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbUrl = process.env.DB_URI || null

const connectDB = async () => {
    try {
        const data = await mongoose.connect(dbUrl)
        console.log(`Database connected with ${data.connection.host}`)
    } catch (error) {
        console.log(error.message)
        setTimeout(connectDB,5000)
    }
}

module.exports =  connectDB
