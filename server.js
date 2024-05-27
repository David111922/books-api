// Dependencies
const mongoose = require("mongoose");
const express = require('express')

// configuration
require("dotenv").config();
const PORT = process.env.PORT || 3000
mongoose.connect(process.env.MONGO_URI)

const app = express()



app.use(express.json())

app.get('/',(req,res) =>{
res.send('Hello World')

})