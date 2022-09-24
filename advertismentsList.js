//Funcion para conevtarnos a la base de datos
/**
 * Datos API
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