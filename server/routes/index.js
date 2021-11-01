// <!--
// File name: index
// Author name: Abi Manoharan
// StudentID: 301165253
// Web App name: COMP229-M2021-MidTerm-301165253 
// ->

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
