// !Dependencies
const mongoose = require("mongoose");
const express = require('express')

// !Configuration
require("dotenv").config();
const PORT = process.env.PORT 
const app = express()
mongoose.connect(process.env.MONGO_URI)




// !Routes
app.use(express.json())
// Routes
app.get('/',(req,res) =>{
res.send('Hello World')

})

// !Listen
app.listen(PORT,() => {

console.log('Hello Books:',PORT)
})