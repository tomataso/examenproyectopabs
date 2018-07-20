'use strict';
const pokemonModel = require('./pokemon.model');

module.exports.registrar = function(req, res){

    let nuevoPokemon = new pokemonModel({

        codigoPokemon : req.body.codigoPokemon,
        nombrePokemon : req.body.nombrePokemon,

        tipo1 : [{
            idTipo : req.body.idTipo,
            Tipo : req.body.Tipo
        }],

        tipo2 : [{
            idTipo : req.body.idTipo,
            Tipo : req.body.Tipo
        }],

        fotoPokemon : req.body.fotoPokemon
      
    });

    nuevoPokemon.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el Pokémon, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El Pokémon se registró con éxito'});
        }

    });




};

module.exports.listarPokemon = function(req, res){
    pokemonModel.find().then(
        function(pokemon){
            res.send(pokemon);
        });
};


module.exports.buscarPokemon = function(req, res){
    pokemonModel.find(req.body.idPokemon).then(
        function(pokemon){
            res.send(pokemon);
        });
};

