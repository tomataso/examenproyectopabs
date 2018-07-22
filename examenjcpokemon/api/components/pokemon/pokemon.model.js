'use strict';
let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({

    codigoPokemon : {type : Number, unique : true, required : true},
    nombrePokemon : {type : String, unique : true, required : true},
    tipo1 : [
        {
            idtipo: {type: String, required: true},
            tipo: {type: String, required: true},
        }
    ],
    tipo2 : [
        {
            idtipo: {type: String, required: false},
            tipo: {type: String, required: false},
        }
    ],

    fotoPokemon  : {type : String, required: true},
    
});

module.exports = mongoose.model('Pokemon', pokemonSchema); 

