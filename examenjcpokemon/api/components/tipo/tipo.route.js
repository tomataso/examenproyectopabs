'use strict';
const express = require('express');
const router = express.Router();
const tipo = require('./tipo.api');


router.route('/registrarTipo')
    .post(function(req, res){
        tipo.registrar(req, res);
});

router.route('/listarTipo')
    .get(function(req, res){
        tipo.listar(req, res);
});


router.route('/buscarTipo')
    .get(function(req, res){
        tipo.buscarPokemon(req, res);
});

module.exports = router;