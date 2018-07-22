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

const btnRegistrarPokemon = document.querySelector('#btnRegistrarPokemon');
btnRegistrarPokemon.addEventListener('click', obtenerDatosPokemon);

const inputCodigo = document.querySelector('#codigoPokemon');

const inputNombrePokemon = document.querySelector('#txtNombrePokemon');

const selectTipo1 = document.querySelector('#tipo1Poke');
const selectTipo2 = document.querySelector('#tipo2Poke');



//loads------------------------------------------------------
window.onload = function () {

   let listaTipo = obtenerListaTipo();


    ftnCreadorDropTipo(selectTipo1, listaTipo);
    ftnCreadorDropTipo(selectTipo2, listaTipo);

};

//funciones-------------------------------------------------
function obtenerDatosPokemon() {
    
    let infoPokemon = [];
    let bError = false;

    let nCodigo = inputCodigo.value;

    let sNombrePokemon = inputNombrePokemon.value;

    let optionTipo1 = selectTipo1.options.selectedIndex;
    let sTipo1 = selectTipo1.options[optionTipo1].innerHTML;
    let sTipo1Id = selectTipo1.value;

    let optionTipo2 = selectTipo2.options.selectedIndex;
    let sTipo2 = selectTipo2.options[optionTipo2].innerHTML;
    let sTipo2Id = selectTipo2.value;




    infoPokemon.push(nCodigo, sNombrePokemon, sTipo1, sTipo1Id, sTipo2, sTipo2Id, imagenUrl);

    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el pokémon',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar el pokémon');
    } else {
        console.log(imagenUrl);
        registrarPokemon(infoPokemon);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'El pokémon se registró adecuadamente',
            confirmButtonText: 'Entendido'
        }).then(
    
        );
        limpiarFormulario();
    }

    return bError;
};

function validar() {
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;
    let regexLetrasNumeros = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ 0-9]+$/;

    if (inputCodigo.value == '' && (regexSoloNumeros.test(inputCodigo.value) == false)) {
        inputCodigo.classList.add('error-input');
        bError = true;
    } else {
        inputCodigo.classList.remove('error-input');
    }

    if (inputNombrePokemon.value == '' && (regexLetrasNumeros.test(inputNombrePokemon.value) == false)) {
        inputNombrePokemon.classList.add('error-input');
        bError = true;
    } else {
        inputNombrePokemon.classList.remove('error-input');
    }

    return bError;
};

function limpiarFormulario() {

    inputNombrePokemon.value = '';
    inputCodigo.value = '';

};


function ftnCreadorDropTipo1(tipo1, listaTipos) {

    for (let i = 0; i < listaTipos.length; i++) {

        let id = listaTipos[i]['_id'];
        let tipo1 = listaTipos[i]['Tipo'];
        let optionElement = document.createElement("option")


        optionElement.appendChild(tipo1);
        optionElement.setAttribute('value', id);
        tipo1.appendChild(optionElement);

    }
};


function ftnCreadorDropTipo2(tipo2, listaTipos) {

    for (let i = 0; i < listaTipos.length; i++) {

        let id = listaTipos[i]['_id'];
        let tipo2 = listaTipos[i]['Tipo'];
        let optionElement = document.createElement("option")


        optionElement.appendChild(tipo2);
        optionElement.setAttribute('value', id);
        tipo2.appendChild(optionElement);

    }
};


