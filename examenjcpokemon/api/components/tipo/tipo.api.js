'use strict';
const pokemonModel = require('./tipo.model');

module.exports.registrar = function(req, res){

    let nuevoTipo = new tipoModel({
    
        Tipo : req.body.Tipo
  
    });

    nuevoTipo.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el Tipo de Pokémon, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El Tipo de Pokémon se registró con éxito'});
        }

    });




};

module.exports.listarTipo = function(req, res){
    tipoModel.find().then(
        function(tipo){
            res.send(tipo);
        });
};


module.exports.buscarTipo = function(req, res){
    tipoModel.find(req.body.idTipo).then(
        function(tipo){
            res.send(tipo);
        });
};

