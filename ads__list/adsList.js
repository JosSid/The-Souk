import {endPointsApi} from '../utils/EndpointsApi.js'
//Funcion para conectarnos a la base de datos
/**
 * Datos API(anuncios)
 * @returns response.json
 */
export async function getAds(pageNumber){
    //Capturamos la URL para trabajar con ellaque nos viene de EndpointsApi.js
     
    const endpoint = `${endPointsApi.endPointsApi.advertisments}?_expand=user&_page=${pageNumber}&_limit=4`
    
    
    const ads = await endPointsApi.get(endpoint);

    return ads;
   
};