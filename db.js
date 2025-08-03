const mongoose = require('mongoose');

//Define the MongoDB Connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

// Setup MongoDB connection
 mongoose.connect(mongoURL)


// Get the default connection
//mongoose maintains a default connection object representing the MongoDB connection 
const db = mongoose.connection;

//Define event listener for database connection
db.on('connected',()=>{
    console.log('connected to MongoDB Server')
});

db.on('error',(err)=>{
    console.error('MongoDB connection error:',err)
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected')
});

//Export  the database connection
module.exports = db;
