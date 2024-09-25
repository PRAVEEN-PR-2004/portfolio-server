const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURL || "mongodb+srv://praveen:praveen@praveen.kthhg.mongodb.net/?retryWrites=true&w=majority&appName=praveen");

const connection = mongoose.connection;
connection.on('connected', () =>
{
    console.log("DB connected");
})
connection.on('error',() => console.log("DB Error"))

module.exports=mongoose.mongoose