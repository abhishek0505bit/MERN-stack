const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS_URI);
        console.log('connected to db');
    }
    catch (error) {
        console.log(`cannot establish connection due to : ${error}`);
    }
}

module.exports = connectDB;