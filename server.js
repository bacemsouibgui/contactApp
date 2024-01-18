// import express
const express = require('express');
// instance express
const app = express()
//import connectDB
const connectDB = require('./config/connectDB');

connectDB()
// middleware
app.use(express.json());

// routes
app.use('/api/contacts',require('./routes/contact'))


// creation server
const port = 5000;
app.listen(port, (err)=> {
    err?console.log('errors'): console.log(`server is running on ${port}`)
})