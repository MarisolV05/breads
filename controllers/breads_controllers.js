
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index',
    {
        breads: Bread
    })
    // res.send(Bread)

})
//new



// SHOW
breads.get('/:arrayIndex', (req, res) => {
    //res.send(Bread[req.params.arrayIndex])
    res.render('Show', {
        breads: Bread[req.params.arrayIndex]
    })
  })
  
module.exports = breads

