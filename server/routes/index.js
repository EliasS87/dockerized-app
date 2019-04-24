'use strict';
var express = require('express');
var router = express.Router();
const Person = require('../db/schema/person');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/person', function(req, res, next) {
  Person.findOne()
  .then(doc => {
    console.log(doc)
    res.send({doc});
  })
  .catch(err => {
    console.error(err)
  })
});

module.exports = router;
