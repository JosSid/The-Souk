//Este objeto nos devolvera las URL del API
/**
 *@param {*} endpoint
 *@param {*} body 
 @return Api__Endpoint
 */
class EndpointsApi {
    baseUrl = 'http://localhost:8000';
    endPointsApi = {
        signup: '/auth/register',
        login: '/auth/login',
        advertisments: '/api/advertisments'
    };

    async get(endpoint){
        const response = await fetch(`${this.baseUrl}${endpoint}`)

        if(!response.ok){
            throw new Error('There are no data')
            
        }
         const data = await response.json();
 
         return data;
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

export const endPointsApi = new EndpointsApi()