const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const languageSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    year: String, Number,
    quantity: Number,
    image: String
})

// model and export: 
const Language = mongoose.model('Language', languageSchema)
module.exports = books
