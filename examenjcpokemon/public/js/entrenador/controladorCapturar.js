
'use srticit';

// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaEntrenadores = document.querySelector('#tblPokemon');


//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){ftnFiltrarListaEntrenadores()});

//loads------------------------------------------------------
window.onload = function(){
    ListarPoke();

};


//funciones--------------------------------------------------
function ListarPoke(){
    let listaDatosEntrenador = obtenerListaEntrenador();
    let listaDatosPokemon = obtenerListaPokemon();

    let tbody = document.querySelector('#tblPokemon tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaDatosPokemon.length; i++){
        
        let fila = tbody.insertRow();
        let celdaCedula = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let btns = fila.insertCell();

        let btnAsignar = document.createElement('input');
        btnAsignar.type = 'button';
        btnAsignar.value = 'Capturar';
        btnAsignar.name = listaDatosPokemon[i]['_id'];
        btnAsignar.classList.add('btn-list');
        btnAsignar.addEventListener('click', function(){

        

            let pDatosPokemon = [listaDatosPokemon[i]['codigoPokemon'],listaDatosPokemon[i]['nombrePokemon'],listaDatosPokemon[i]['_id'] ];
            obtenerDatosEntrenador(pDatosPokemon);

        });

        celdaCedula.innerHTML = listaDatosPokemon[i]['codigoPokemon'];
        celdaNombre.innerHTML = listaDatosPokemon[i]['nombrePokemon'] ;
        btns.appendChild(btnAsignar);
    }

};

function obtenerIdEntrenador() {
    let paginaUrl = window.location.href;
    let locacion = paginaUrl.lastIndexOf("?") + 3;
    let id = paginaUrl.slice(locacion,paginaUrl.lenght); 
 
    return id;
 }; 






function obtenerDatosEntrenador(pDatosPokemon){

    let infoCapturarPokeBd =[];

    let idmlabEntrenador = obtenerIdEntrenador();
    let ncodigoPokemon = pDatosPokemon[0];    
    let snombrePokemon = pDatosPokemon[1] ;

   // let idEntrenador = pDatos[2];
   
    

   infoCapturarPokeBd.push(idmlabEntrenador,ncodigoPokemon,snombrePokemon);
    agregarPokemon(infoCapturarPokeBd);
    

    swal({
        type : 'success',
        title : 'Asignación exitosa',
        text: 'El pokemon ha sido capturado adecuadamente',
        confirmButtonText : 'Entendido'
    });
    

};

