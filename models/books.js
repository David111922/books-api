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
const Books= mongoose.model('Books', booksSchema)
module.exports = books


//         "title": "The Shinobi Initiative",
//         "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
//         "year": 2014,
//         "quantity": 10,
//         "imageURL": "https://imgur.com/LEqsHy5.jpeg"
//     }),