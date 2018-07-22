'use strict';
let mongoose = require('mongoose');

let entrenadorSchema = new mongoose.Schema({

    codigoEntrenador: { type: Number, unique: true, required: true },
    nombreEntrenador: { type: String, required: true },
    edad: { type: Number, required: true },
    sexo: { type: String, required: true },
    foto: { type: String },
    equipoPokemon: [
        {
            codigoPokemon : {type : Number},
            nombrePokemon: { type: String}

        }
    ]
});

module.exports = mongoose.model('Entrenador', entrenadorSchema);