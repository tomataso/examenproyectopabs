'use strict';
const express = require('express');
const router = express.Router();

const tipo = require('./tipo.api');


router.route('/registrartipo')
    .post(function (req, res) {
        tipo.registrar(req, res);
    });


router.route('/listartipo')
    .get(function (req, res) {
        tipo.listar(req, res);
    });


module.exports = router;