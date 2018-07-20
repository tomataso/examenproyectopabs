'use strict';
let mongoose = require('mongoose');

let tipoSchema = new mongoose.Schema({

    Tipo: { type: String, required: true }

});

module.exports = mongoose.model('Tipo', tipoSchema);

