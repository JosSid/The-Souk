//Funcion para conectarnos a la base de datos
/**
 * Datos API(anuncios)
 * @returns response.json
 */
export async function getAdvertisments(){
    //Capturamos la URL para trabajar con ella
    const advertismentsURL = 'http://localhost:8000/api/users'

    return new Promise(async (resolve,reject) => {
      //Hacemos fetch a la URL para conectarnos 
      const response = await  fetch(advertismentsURL);
      //Recibimos los datos
      const advertisments = await response.json()
      resolve(advertisments)
    });
};