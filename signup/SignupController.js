import { pubSub } from "../notifications/pubSub.js";
import { loginUser, registerUser } from "./signupList.js";

//Controlador de registro de usuarios
/**
 * @param nodo a mutar
 * @return instancia controlador registro usuarios
 */
export class SignupController {
    constructor(nodeElement) {
        this.signupFormElement = nodeElement;

        this.subscribeToEvents();
        
    };

    subscribeToEvents() {
        this.signupFormElement.addEventListener('submit', (event) => {
            event.preventDefault()
            this.validatePassword()
        });

        const registerInputElements = Array.from(this.signupFormElement.querySelectorAll('input'));
        const registerUserButton = this.signupFormElement.querySelector('#register__user__button')

        registerInputElements.forEach(registerInputElement => {
            registerInputElement.addEventListener('input', () => {
               const inputsValue = registerInputElements.every(inputElement => inputElement.value)
               if(inputsValue){
                registerUserButton.removeAttribute('disabled')
               }else{
                registerUserButton.setAttribute('disabled', '')
               }
            });
        });
    };
    
    validatePassword() {
        const passwordElement = this.signupFormElement.querySelector('#password');
        const confirmPasswordElement = this.signupFormElement.querySelector('#confirm__password');

        const minLength = 5;
        if(passwordElement.value.length <= minLength) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Password must be 6 characters or more');
        };

        const regExp = new RegExp(/^[a-zA-Z0-9]*$/);

        if(regExp.test(passwordElement.value)) {
            if(passwordElement.value === confirmPasswordElement.value) {
                this.createUser()
                pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Login User')
                setTimeout(() => {
                    window.location = '/'
                }, 4000);
            }else{
                pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Passwords do not match');
            }
            
        }else{
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'The password must have lowercase, uppercase and numbers');
        }
    };

     async createUser() {
        const formData = new FormData(this.signupFormElement);
        const username = formData.get('username');
        const password = formData.get('password');
        const statement = formData.get('statement')
       
        if(statement === 'register'){
            try {
                await registerUser(username, password);

            
                const jwt = await loginUser(username,password);
                localStorage.setItem('token', jwt)
                if(jwt === undefined){
                    localStorage.removeItem('token')
                }
            }catch(err){
                pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, err)
            }
        }

        if(statement === 'login'){
            try {
                const jwt = await loginUser(username,password);
                localStorage.setItem('token', jwt)
                if(jwt === undefined){
                    pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Username or Password is not correct')
                    localStorage.removeItem('token')
                }

            }catch(err){
                pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Login Error')
            }
        }
    };
};

//COmportamiento de nuestro formulario
/*
-El usuario y la password No pueden estar vacios
-La contraseña debe tener un minimo de caracteres
-La contraseña debe contener mayusculas minusculas y numeros

*/