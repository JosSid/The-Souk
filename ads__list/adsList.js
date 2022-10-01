import {endPointsApi} from '../EndpointsApi.js'
//Funcion para conectarnos a la base de datos
/**
 * Datos API(anuncios)
 * @returns response.json
 */
export async function getAds(){
    //Capturamos la URL para trabajar con ellaque nos viene de EndpointsApi.js
    const ads = await endPointsApi.get(endPointsApi.endPointsApi.advertisments);

    return ads;
   
};