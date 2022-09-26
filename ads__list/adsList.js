//Funcion para conectarnos a la base de datos
/**
 * Datos API(anuncios)
 * @returns response.json
 */
export async function getAds(){
    //Capturamos la URL para trabajar con ella
    const adsURL = 'http://localhost:8000/api/users'

    
      let response;
      try {
        response = await  fetch(adsURL);//Hacemos fetch a la URL para conectarnos 
      } catch (err) {
        throw new Error('La URL no existe')
      };

      if(!response.ok){
        throw new Error('Advertisments not found')
      }

      try {
          //Recibimos los datos
          const ads = await response.json()
          return ads
      } catch(err) {
        throw new Error('La respuesta no es valida')
      }



    
};