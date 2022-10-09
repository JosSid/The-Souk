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
       const token = localStorage.getItem('token')
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();

        return data;
    };

    async put(endpoint,body){
        const token = localStorage.getItem('token')
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();

        return data;
    }

    async delete(endpoint){
        const token = localStorage.getItem('token')
         const response = await fetch(`${this.baseUrl}${endpoint}`, {
             method: 'DELETE',
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": `Bearer ${token}`
             }
         });
         const data = await response.json();
 
         return data;
     };
};

export const endPointsApi = new EndpointsApi()