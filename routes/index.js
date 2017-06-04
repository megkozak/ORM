'use strict';

var express    = require('express');
var orm        = require('orm');
var router     = express.Router();
var initialize = require('pg-connection-string');
var potato     = require('../models/index')



potato.initialize('postgres://postgres@localhost/artists')

router.get('/', function(request, response) {
	potato.getAll('artists', function(data){
	  console.log('hi')
	  // data === data.rows (from the database)
	  data.map(function(item){
	    console.log(item.firstname)
	  })
	})
	response.render('index');
});


potato.getAll('artists', function(data){
  console.log('hi')
  // data === data.rows (from the database)
  data.map(function(item){
    console.log(item.firstname)
  })
})

potato.findById('artists', 1, function(data){
    console.log('hi')
    data.map(function(item){
      console.log(item.firstname)
    })
});


module.exports = router;
