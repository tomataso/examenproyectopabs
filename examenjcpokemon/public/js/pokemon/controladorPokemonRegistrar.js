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

const selectTipo1 = document.querySelector('#slttipo1Poke');
const selectTipo2 = document.querySelector('#slttipo2Poke');



//funciones-------------------------------------------------
function obtenerDatosPokemon() {
    
    let infoPokemon = [];
    let bError = false;

    let nCodigo = inputCodigo.value;

    let sNombrePokemon = inputNombrePokemon.value;


  

    let optionTipo1 = selectTipo1.options.selectedIndex;
    let sTipo1 = selectTipo1.options[optionTipo1].innerHTML;
   

    let optionTipo2 = selectTipo2.options.selectedIndex;
    let sTipo2 = selectTipo2.options[optionTipo2].innerHTML;
    




    infoPokemon.push(nCodigo, sNombrePokemon, sTipo1, sTipo2, imagenUrl);

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
            window.location.href = "../../html/general/index.html"
        );
        limpiarFormulario();
    }

    return bError;
};






function validar() {
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;
    let regexLetrasNumeros = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ 0-9]+$/;


    //Validación del Codigo (Solo numeros)
    if (inputCodigo.value == '' || (regexSoloNumeros.test(inputCodigo.value) == false)) {
        inputCodigo.classList.add('error_input');
        bError = true;
    } else {
        inputCodigo.classList.remove('error_input');
    }


    //Validación del nombre del Pokemon
    if (inputNombrePokemon.value == '' || (regexLetrasNumeros.test(inputNombrePokemon.value) == false)) {
        inputNombrePokemon.classList.add('error_input');
        bError = true;
    } else {
        inputNombrePokemon.classList.remove('error_input');
    }

 

    return bError;
};

function limpiarFormulario() {

    inputNombrePokemon.value = '';
    inputCodigo.value = '';

};




creaDataListTipo1();
creaDataListTipo2();

function creaDataListTipo1 () {
    let listaTipo = obtenerListaTipo();
    
    for (let i = 0; i < listaTipo.length; i++) {


        let option = document.createElement("option");
        option.text = listaTipo[i]['tipo'];
        option.value = listaTipo[i]['tipo'];
        let select = document.querySelector("#slttipo1Poke");
        select.add(option);
   
    }  

    console.log(listaTipo);
    
}


function creaDataListTipo2 () {
    let listaTipo = obtenerListaTipo();
    
    for (let i = 0; i < listaTipo.length; i++) {


        let option = document.createElement("option");
        option.text = listaTipo[i]['tipo'];
        option.value = listaTipo[i]['tipo'];
        let select = document.querySelector("#slttipo2Poke");
        select.add(option);
   
    }  

    console.log(listaTipo);
    
}