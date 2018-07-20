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
 
    
            let imagen = document.createElement('img');
            imagen.src = listaEntrenador[i]['foto'];
            imagen.classList.add('imageSettings');
    
            foto.appendChild(imagen);
    

            cCodigoEntrenador.innerHTML = listaEntrenador[i]['codigoEntrenador'];
            cNombre.innerHTML = listaEntrenador[i]['nombreEntrenador'];
            cEdad.innerHTML = listaEntrenador[i]['edad'];
            cSexo.innerHTML = listaEntrenador[i]['sexo'];


        }
        
    }

};


