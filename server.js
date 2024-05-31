// !Dependencies
const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors')

// !Configuration
require("dotenv").config();
const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(cors())

// !connect to Mongo with promise
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
app.use(express.urlencoded({ extended: true }));
// Routes
app.get('/',(req,res) =>{
res.send('Hello World')
res.json({ msg: 'This is CORS-enabled for all origins!' })
})
// REQUIRE CONTROLLERS
const booksController = require('./controllers/books-controllers')
app.use('/books', booksController);



// !Listen
// app.listen(PORT,() => {

// console.log('Hello Books:',PORT)
// })