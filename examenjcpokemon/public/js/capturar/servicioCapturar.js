function agregarPokemon(infoBd){
   
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/agregarPokemon',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            _id : infoBd[0],
            codigoPokemon : infoBd[2],
            nombrePokemon : infoBd[3],
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}