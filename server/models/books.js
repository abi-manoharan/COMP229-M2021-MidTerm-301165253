
// <!--
// File name: books
// Author name: Abi Manoharan
// StudentID: 301165253
// Web App name: COMP229-M2021-MidTerm-301165253 
// ->

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
