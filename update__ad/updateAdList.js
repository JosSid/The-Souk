import { endPointsApi } from "../utils/EndpointsApi.js"

export const updateApiAd = async (adId,statement,name,photo,description,price) => {
    
    const updateAd = await endPointsApi.put(`${endPointsApi.endPointsApi.advertisments}/${adId}`, {
        statement,
        name,
        photo,
        description,
        price
    })
}