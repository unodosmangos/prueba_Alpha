const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' })


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
        })
        console.log('DB Connected')
    }   catch (error) {
            console.log(error);
            process.exit(1)
    }
}

module.exports = connectDB