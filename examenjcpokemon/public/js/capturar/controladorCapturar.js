
let botonRegistrar = document.querySelector('#btnAgregar');
let selectUsuarios = document.querySelector('#sltEntrenador');
let inputnumeroPoke = document.querySelector('#numeroPoke');
let inputnombrePoke = document.querySelector('#nombrePoke');


botonRegistrar.addEventListener('click', obtenerDatos)
listarUsuarios();


function obtenerDatos(){

    let id = selectUsuarios.value;
    let ninputnombrePoke = inputnumeroPoke.value;
    let sinputnombrePoke = inputnombrePoke.value;
  

    agregarTitulo(id, ninputnombrePoke, sinputnombrePoke);
}

function listarUsuarios(){

    let usuarios = obtenerListaEntrenador();
    for(let i = 0; i < usuarios.length; i++){
        let opcion = new Option(usuarios[i]['nombreEntrenador'])
        opcion.value = usuarios[i]['_id'];
        
        selectUsuarios.options.add(opcion);
        

    }
}