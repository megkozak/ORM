var express = require('express');
// var router = express.Router();

var pg       = require('pg');
let potato = {}

let client

potato.initialize = function(str){
  client = new pg.Client(str);
  client.connect();
}

potato.getAll = function(tableName, callback){
  // client.query("select * from artists;")
  client.query(`select * from ${tableName};`)
  .then(function(data){
    callback(data.rows)
  })
  .catch(function(err){
    console.log(err)
    console.log('something went wrong 💩')
  })
}


potato.findById = function(tableName, id, callback){
  client.query(`select * from ${tableName} where id = ${id};`)
  .then(function(data){
    callback(data.rows)
  })
  .catch(function(err){
    console.log(err)
    console.log('something went wrong 💩')
  })
};


module.exports = potato
