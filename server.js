// !Dependencies
const mongoose = require("mongoose");
const express = require('express')
const cors = require('cors')

// !Configuration
require("dotenv").config();
const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(cors())


mongoose.connect(MONGO_URI)



    .then(() => {
        console.log('Connected to MongoDB:', MONGO_URI);
        
        app.listen(PORT, () => {
            console.log('Server is running on port:', PORT);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

    // !create express app\



// !Routes
app.use(express.json())
// Routes
app.get('/',(req,res) =>{
res.send('Hello World')

})

// !Listen
// app.listen(PORT,() => {

// console.log('Hello Books:',PORT)
// })