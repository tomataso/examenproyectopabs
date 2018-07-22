'use strict';
const express = require('express');
const router = express.Router();

const entrenador = require('./entrenador.api');


router.route('/registrarEntrenador')
    .post(function (req, res) {
        entrenador.registrar(req, res);
    });

router.route('/agregarPokemon')
    .post(function (req, res) {
        entrenador.agregarPokemon(req, res);
    });

router.route('/listarEntrenador')
    .get(function (req, res) {
        entrenador.listar(req, res);
    });


module.exports = router;