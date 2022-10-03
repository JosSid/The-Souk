import { endPointsApi } from "../EndpointsApi.js"

export const createApiAd = (statement,name,photo,description,price) => {
    endPointsApi.post(endPointsApi.endPointsApi.advertisments, {
        statement,
        name,
        photo,
        description,
        price
    })
}