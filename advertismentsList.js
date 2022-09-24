
export async function getAdvertisments(){

    const advertismentsURL = 'http://localhost:8000/api/users'

    return new Promise(async (resolve,reject) => {
      //Hacemos fetch a la URL para conectarnos 
      const response = await  fetch(advertismentsURL);
      //Recibimos los datos
      const advertisments = await response.json()
      resolve(advertisments)
    });
};