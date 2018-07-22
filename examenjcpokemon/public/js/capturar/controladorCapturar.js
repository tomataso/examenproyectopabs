
'use srticit';

// variables globales----------------------------------------
const inputBusqueda = document.querySelector('#inputBusqueda');
const tablaEntrenadores = document.querySelector('#tblPokemon');
const tablaEntrenadoresAsignados = document.querySelector('#tblEntrenadoresAsignados');

//listeners--------------------------------------------------
inputBusqueda.addEventListener('keyup' , function(){ftnFiltrarListaEntrenadores()});

//loads------------------------------------------------------
window.onload = function(){
    ListarEntrenadores();
    ListarEntrenadoresAsignados();
    ftnEntrenadoresAsignados();
};


//funciones--------------------------------------------------
function ListarEntrenadores(){
    let listaDatosEntrenador = obtenerListaEntrenador();

    let tbody = document.querySelector('#tblPokemon tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaDatos.length; i++){
        
        let fila = tbody.insertRow();
        let celdaCedula = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let btns = fila.insertCell();

        let btnAsignar = document.createElement('input');
        btnAsignar.type = 'button';
        btnAsignar.value = 'Capturar';
        btnAsignar.name = pDatosEntrenador[i]['_id'];
        btnAsignar.classList.add('btn-list');
        btnAsignar.addEventListener('click', function(){

            let pDatosEntrenador = [listaDatosEntrenador[i][obtenerIdEntrenador(),listaDatosEntrenador[i]['_id']];
            obtenerDatosEntrenador(pDatosEntrenador)

            let pDatosPokemon = [listaDatos[i]['codigoEntrenador'],listaDatos[i]['nombreEntrenador'],obtenerIdEntrenador(),listaDatos[i]['_id']];
            obtenerDatosEntrenador(pDatos)

        });

        celdaCedula.innerHTML = listaDatos[i]['codigoEntrenador'];
        celdaNombre.innerHTML = listaDatos[i]['nombreEntrenador'] ;
        btns.appendChild(btnAsignar);
    }

};

function obtenerIdEntrenador() {
    let paginaUrl = window.location.href;
    let locacion = paginaUrl.lastIndexOf("?") + 3;
    let id = paginaUrl.slice(locacion,paginaUrl.lenght); 
 
    return id;
 }; 



 // -----------------------------


function obtenerDatosEntrenador(pDatos){

    let infoBd =[];

    let idmlabEntrenador = pDatos[4];
    let ncodigoEntrenador = pDatos[0];    
    let nombreEstudiante = pDatos[1] ;

   // let idEntrenador = pDatos[2];
   
    

    infoBd.push(idmlabEntrenador,ncodigoEntrenador,nombreEstudiante);
    agregarPokemon(infoBd)
    

    swal({
        type : 'success',
        title : 'Asignación exitosa',
        text: 'El pokemon ha sido capturado adecuadamente',
        confirmButtonText : 'Entendido'
    });
    
    ListarEntrenadoresAsignados();
    ftnEstudiantesAsignados();
};

/*
function ListarEntrenadoresAsignados(){ //falta mostrar solo los estudiantes relacionados al proyecto escogido previamente.
    let listaDatos = obtenerListaEntrenadorAsignados();
    let tbody = document.querySelector('#tblEntrenadoresAsignados tbody');
    let datosEstudiante = null;
    let idProyecto = obtenerIdProyecto();
    tbody.innerHTML = '';

    for(let i = 0; i < listaDatos.length; i++){

        datosEstudiante = listaDatos[i]['datosEstudiante'];

        if(listaDatos[i]['desactivado'] || listaDatos[i]['idProyecto'] != idProyecto){
            continue;
        } else{
            let fila = tbody.insertRow();
            let celdaCedula = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let btns = fila.insertCell();

            let btndesasignar = document.createElement('input');
            btndesasignar.type = 'button';
            btndesasignar.value = 'Desasignar';
            btndesasignar.name = listaDatos[i]['_id'];
            btndesasignar.classList.add('btn-list');
            btndesasignar.addEventListener('click', ftnDesasignarEstudiante);

            celdaCedula.innerHTML = datosEstudiante[0].cedulaEstudiante;
            celdaNombre.innerHTML = datosEstudiante[0].nombreEstudiante;
            btns.appendChild(btndesasignar);
        }
    }

};

function ftnDesasignarEstudiante(){
	let estudiante = [this.name,true];
    desasignarEstudiante(estudiante);
    swal({
        type : 'success',
        title : 'Desasignación exitosa',
        text: 'El estudiante ha sido desasignado adecuadamente',
        confirmButtonText : 'Entendido'
    });
    ListarEntrenadoresAsignados();
    ListarEntrenadores();
    ftnEstudiantesAsignados();
};




function  ftnFiltrarListaEntrenadores (){

    let criterioBusqueda = inputBusqueda.value.toUpperCase();
    let filas = tablaEntrenadores.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;

    for (let i = 1; i < filas.length; i++) {    
        datosFila = filas[i];
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

function  ftnEstudiantesAsignados (){

    let filas = tablaEntrenadoresAsignados.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    
    for (let i = 1; i < filas.length; i++) {    
        datosFila = filas[i];
        datos = datosFila.getElementsByTagName('td');

        for (let j = 0; j < 2; j++) {
            valor = datos[j].innerHTML.toUpperCase();
            ftNoListar(valor);
           
        }
    }
};

function ftNoListar (criterioBusqueda){

    let filas = tablaEntrenadores.getElementsByTagName('tr');
    let datosFila = null;
    let datos = null;
    let valor = null;
    let coincide = false;
    
    for (let i = 1; i < filas.length; i++) {    
        datosFila = filas[i];
        datos = datosFila.getElementsByTagName('td');
        coincide = false;

        for (let j = 0; j < datos.length; j++) {
            valor = datos[j].innerHTML.toUpperCase();

            if(valor.includes(criterioBusqueda)){
                coincide = true;
            } 
        }
        if(coincide){
            datosFila.classList.add('esconder');
        } else {
            datosFila.classList.remove('esconder');
        }
    }
};

*/