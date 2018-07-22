
'use strict';
let mongoose = require('mongoose');

let tipoSchema = new mongoose.Schema({


    tipo : {type : String, unique : true, required : true},

});

module.exports = mongoose.model('tipo', tipoSchema); 

