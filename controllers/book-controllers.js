// Dependencie
const mongoose = require("mongoose");
const express = require('express')
const books = express.Router()
const Book = require('../models/books.js')
 

books.get('/',(req, res) => {
 Book.find()  
 .then(books => {
    res.json(books);
  })
  .catch(err => {
    console.log('error fetching books:', err) ;
    res.status(404).json('error404')
  })
})


module.exports = books