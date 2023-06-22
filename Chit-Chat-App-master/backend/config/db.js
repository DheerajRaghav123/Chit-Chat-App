const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect('mongodb+srv://dheeraj111:2WrAGOqqUtpqeq0r@cluster0.jjvmi79.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser : true,
            useUnifiedTopology: true,
            // useFindOneAndUpdate : true,
        });
        console.log(`MongoDB Database  connected: ${conn.connection.host}`.blue.underline);
    }
    catch(error) {
        console.log(`Database Error : ${error.message}`.red.bold.underline);
        process.exit();
    }
};

module.exports = connectDB;