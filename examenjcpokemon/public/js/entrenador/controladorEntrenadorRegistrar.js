/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';


//variables globales------------------------------------------
const botonRegistrar = document.querySelector('#btnRegistrarEntrenador');
botonRegistrar.addEventListener('click', obtenerDatosEntrenador);

const inputCodigoEntrenador = document.querySelector('#codigoEntrenador');
const inputNombreEntrenador = document.querySelector('#txtNombreEntrenador');
const inputEdad = document.querySelector('#txtEdad');
const selectSexo = document.querySelector('#selectSexo');



function obtenerDatosEntrenador() {

    let bError = false;

    let nCodigoEntrenador = inputCodigoEntrenador.value;
    let sNombreEntrenador = inputNombreEntrenador.value;
    let nEdad = Number(inputEdad.value);
    let sselectSexo = selectSexo.value;




    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el Entrenador',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar el Entrenador');
    } else {
        console.log(imagenUrl);
        registrarEntrenador(nCodigoEntrenador, sNombreEntrenador, nEdad, sselectSexo, imagenUrl);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'El Entrenador se registró adecuadamente',
            confirmButtonText: 'Entendido'
        });

        limpiarFormulario();
    }

};


function validar() {
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;


    //Validación del Codigo (Solo numeros)
    if (inputCodigoEntrenador.value == '' || (regexSoloNumeros.test(inputCodigoEntrenador.value) == false)) {
        inputCodigoEntrenador.classList.add('error_input');
        bError = true;
    } else {
        inputCodigoEntrenador.classList.remove('error_input');
    }


    //Validación del nombre del entrenador.
    if (inputNombreEntrenador.value == '' || (regexSoloLetras.test(inputNombreEntrenador.value) == false)) {
        inputNombreEntrenador.classList.add('error_input');
        bError = true;
    } else {
        inputNombreEntrenador.classList.remove('error_input');
    }


        //Validación del nombre del SEXO
        if (selectSexo.value == '' || (inputNombreEntrenador.value == 'default')) {
            selectSexo.classList.add('error_input');
            bError = true;
        } else {
            selectSexo.classList.remove('error_input');
        }

    //Validación de la edad (Edad mayor de 15, menor de 80)
    if (inputEdad.value == '' || (regexSoloNumeros.test(inputEdad.value) == false) || Number(inputEdad.value) < Number(inputEdad.min) || Number(inputEdad.value) > Number(inputEdad.max)) {
        inputEdad.classList.add('error_input');
        bError = true;
    } else {
        inputEdad.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario() {
    sNombreEntrenador.value = '';
    inputEdad.value = 0;
    nCodigoEntrenador = '';
}

