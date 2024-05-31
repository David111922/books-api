const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const bookSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    year:  Number,
    quantity: Number,
    image: String
})

// model and export: 
const Books= mongoose.model('Books', bookSchema)
module.exports = Books


//         "title": "The Shinobi Initiative",
//         "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
//         "year": 2014,
//         "quantity": 10,
//         "imageURL": "https://imgur.com/LEqsHy5.jpeg"
//     }),