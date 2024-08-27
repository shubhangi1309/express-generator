var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('Mongo db url');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);