/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';

// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaEntrenador = document.querySelector('#tblEntrenador');


//loads------------------------------------------------------
window.onload = function(){
    imprimirListaEntrenador();
};


//listeners--------------------------------------------------
inputFiltro.addEventListener('keyup' , function(){
    imprimirListaEntrenador(inputFiltro.value)
});


//funciones--------------------------------------------------
function imprimirListaEntrenador(pFiltro){
    let listaEntrenador = obtenerListaEntrenador();
    let tbody = document.querySelector('#tblEntrenador tbody');

    if(!pFiltro){
        pFiltro = '';
    }
    tbody.innerHTML = '';


    for(let i = 0; i < listaEntrenador.length; i++){

        if(listaEntrenador[i]['nombreEntrenador'].toLowerCase().includes(pFiltro.toLowerCase())){

            let fila = tbody.insertRow();
            
            let foto = fila.insertCell();
            let cCodigoEntrenador = fila.insertCell();
            let cNombre = fila.insertCell();
            let cEdad = fila.insertCell();
            let cSexo = fila.insertCell();
            let btns = fila.insertCell();
 
    
            let imagen = document.createElement('img');
            imagen.src = listaEntrenador[i]['foto'];
            imagen.classList.add('imageSettings');
    
           
    
            let btnAsignarEquipo = document.createElement('input');
            btnAsignarEquipo.type = 'button';
            btnAsignarEquipo.value = 'Asignar Equipo';
            btnAsignarEquipo.name = listaEntrenador[i]['_id'];
            btnAsignarEquipo.classList.add('btn-list');
            btnAsignarEquipo.addEventListener('click', ftnAsignarEquipo);

            cCodigoEntrenador.innerHTML = listaEntrenador[i]['codigoEntrenador'];
            cNombre.innerHTML = listaEntrenador[i]['nombreEntrenador'];
            cEdad.innerHTML = listaEntrenador[i]['edad'];
            cSexo.innerHTML = listaEntrenador[i]['sexo'];

            foto.appendChild(imagen);
            btns.appendChild(btnAsignarEquipo);

            
        }
        
    }

};

function ftnAsignarEquipo(){
	let id = this.name;
    
    window.location.replace('./capturarPokemon.html?id' + id);


};


