const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI);
        console.log(`Database connection succesful: ${conn.connection.host}`.cyan.underline)
    }

    catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB