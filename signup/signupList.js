import {endPointsApi} from "../EndpointsUsersApi.js"

/**
 * @param {*} username 
 * @param {*} password 
 * @Enviamos datos de registro de usuario a base de datos
 */
export const registerUser = async (username, password) => {
    const body = {
        username,
        password
    }
    await endPointsApi.post(endPointsApi.endPointsApi.signup,body)
};

/**
 * @param {*} username 
 * @param {*} password 
 * @Enviamos username y password para hacer login
 */
export const loginUser = async (username, password) => {
    const body = {
        username,
        password
    }
    await endPointsApi.post(endPointsApi.endPointsApi.login,body)
}