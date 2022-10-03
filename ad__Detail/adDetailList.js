import { endPointsApi } from "../EndpointsApi.js"

//Pediremos el el detalle del anuncio a la API
/**
 * 
 * @param {*} adId 
 * @returns advertisment
 */
export const getAdsById = async (adId) => {
    const ad = await endPointsApi.get(`${endPointsApi.endPointsApi.advertisments}/${adId}`)
    

    return ad;
};