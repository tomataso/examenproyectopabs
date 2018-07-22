/*
Responsabilidades del servicio
    - Procesamiento de datos (cálculos)
    - Almacenamiento temporal de los datos
    - Comunicar el public (front-end) con el api (back-end)
*/

'use strict';


function registrarEntrenador(nCodigoEntrenador, sNombreEntrenador, nEdad, selectSexo, imagenUrl) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrarEntrenador',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

            codigoEntrenador: nCodigoEntrenador,
            nombreEntrenador: sNombreEntrenador,
            edad: nEdad,
            sexo: selectSexo,
            foto: imagenUrl
        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;
}


