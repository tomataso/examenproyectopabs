'use strict';
const entrenadorModel = require('./entrenador.model');

//Función para registrar un usuario
module.exports.registrar = function (req, res) {

    //Crea una variable nuevoUsuario utilizando como plantilla el userModel

    let nuevoEntrenador = new entrenadorModel({

        codigoEntrenador: req.body.codigoEntrenador,
        nombreEntrenador: req.body.nombreEntrenador,
        edad: req.body.edad,
        sexo: req.body.sexo,
        foto: req.body.foto,
      
    });

    nuevoEntrenador.save(function (error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo registrar el Entrenador, ocurrió el siguiente error' + error });
        } else {
            res.json({ success: true, msg: 'El Entrenador se registró con éxito' });
        }

    });

};

module.exports.listar = function (req, res) {
    entrenadorModel.find().then(
        function (entrenador) {
            res.send(entrenador);
        });
};

module.exports.agregarPokemon = function (req, res) {

    entrenadorModel.update(
        { _id: req.body._id },
        {
            $push:
            {
                'equipoPokemon':
                {
                  
                    nombrePokemon: req.body.nombrePokemon

                }
            }
        },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo registrar el pokemon en el equipo del entrenador, ocurrió el siguiente error' + error });
            } else {
                res.json({ success: true, msg: 'El pokemon se registró con éxito en el equipo del entrenador.' });
            }
        }
    )
};