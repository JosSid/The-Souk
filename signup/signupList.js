import {endPointsApi} from "../EndpointsApi.js"
import { pubSub } from "../notifications/pubSub.js";

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
    try{
        const data = await endPointsApi.post(endPointsApi.endPointsApi.signup,body)
        
        if(!data){
            throw new Error('Error data base')
        }
    
        if(data.message === 'Username is taken'){
            throw new Error('Username is taken')
        }
    }catch(err){
        pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, err)
    }

    
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
    };
    const data = await endPointsApi.post(endPointsApi.endPointsApi.login,body);

    return data.accessToken;
};