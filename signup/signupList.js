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
    await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
};