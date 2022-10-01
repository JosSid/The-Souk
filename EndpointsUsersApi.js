//Este objeto nos devolvera las URL del API
/**
 *@param {*} endpoint
 *@param {*} body 
 @return Api__Endpoint
 */
class EndpointsUsersApi {
    baseUrl = 'http://localhost:8000';
    endPointsApi = {
        signup: '/auth/register',
        login: '/auth/login'
    };

    async post(endpoint, body){
       const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();

        return data;
    };
};

export const endPointsApi = new EndpointsUsersApi()