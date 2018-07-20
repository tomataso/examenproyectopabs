
'use srticit';

// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaProyectos = document.querySelector('#tblPokemon');

//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){ftnFiltrarListaPokemon()});

//loads------------------------------------------------------
window.onload = function(){
    ListarPokemon();
};


//funciones--------------------------------------------------
function ListarPokemon(){
    let listaPokemon = obtenerListaPokemon();

    

    let tbody = document.querySelector('#tblPokemon tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaPokemon.length; i++){
        
            let fila = tbody.insertRow();

            let celdaCodigoPokemon = fila.insertCell();
            let celdanombrePokemon = fila.insertCell();
            let celdatipo1 = fila.insertCell();
            let celdatipo2 = fila.insertCell();
            let fotoPokemon = fila.insertCell();

            let imagen = document.createElement('img');
            imagen.src = listaPokemon[i]['fotoPokemon'];
            imagen.classList.add('imageSettings');
    
            fotoPokemon.appendChild(imagen);
    

            celdaCodigoPokemon.innerHTML = listaPokemon[i]['codigoPokemon'];
            celdanombrePokemon.innerHTML = listaPokemon[i]['nombrePokemon'];
            celdatipo1.innerHTML = listaPokemon[i]['tipo1'];
            celdatipo2.innerHTML = listaPokemon[i]['tipo2'];
        

        
    }

};




// Falta el Buscar Por TIPO
function  ftnFiltrarListaPokemon (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filasPokemon = tablaPokemon.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filasPokemon.length; i++) {    
        datosFila = filasPokemon[i];
        datos = datosFila.getElementsByTagName('td');
        coincide = false;

        for (let j = 0; j < datos.length; j++) {
            valor = datos[j].innerHTML.toUpperCase();

            if(valor.includes(criterioBusqueda)){
                coincide = true;
            } 
        }
        if(coincide){
            datosFila.classList.remove('esconder');
        } else {
            datosFila.classList.add('esconder');
        }
    }

   
};

