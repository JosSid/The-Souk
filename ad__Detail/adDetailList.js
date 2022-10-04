import { endPointsApi } from "../EndpointsApi.js"

//Pediremos el el detalle del anuncio a la API
/**
 * 
 * @param {*} adId 
 * @returns advertisment
 */
export const getAdsById = async (adId) => {
    const ad = await endPointsApi.get(`${endPointsApi.endPointsApi.advertisments}/${adId}?_expand=user`)
    

    return ad;
};

export const removeAdById = async (adId) => {
    const ad = await endPointsApi.delete(`${endPointsApi.endPointsApi.advertisments}/${adId}`)
       
};