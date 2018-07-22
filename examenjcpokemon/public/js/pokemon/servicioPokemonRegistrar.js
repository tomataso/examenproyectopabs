/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';



//funciones--------------------------------------
function registrarPokemon(pPokemon) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrarPokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

            codigoPokemon: pPokemon[0],
            nombrePokemon: pPokemon[1],
            idTipo: pPokemon[2],
            Tipo: pPokemon[3],
            idTipo: pPokemon[4],
            Tipo: pPokemon[5],
            fotoPokemon: pPokemon[6]

        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;
}




