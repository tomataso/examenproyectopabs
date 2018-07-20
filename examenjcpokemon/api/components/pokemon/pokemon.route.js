'use strict';
const express = require('express');
const router = express.Router();
const pokemon = require('./pokemon.api');


router.route('/registrarPokemon')
    .post(function(req, res){
        pokemon.registrar(req, res);
});

router.route('/listarPokemon')
    .get(function(req, res){
        pokemon.listar(req, res);
});


router.route('/buscarPokemon')
    .get(function(req, res){
        pokemon.buscarPokemon(req, res);
});

module.exports = router;