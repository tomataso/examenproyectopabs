function agregarPokemon(infoCapturarPokeBd){
   
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/agregarPokemon',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

            _id : infoCapturarPokeBd[0],
            codigoPokemon : infoCapturarPokeBd[1],
            nombrePokemon : infoCapturarPokeBd[2],
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}