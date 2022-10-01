import { pubSub } from "../notifications/pubSub.js";
import { registerUser } from "./signupList.js";

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

        const minLength = 5;
        if(passwordElement.value.length <= minLength) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Password must be 6 characters or more');
        };

        const regExp = new RegExp(/^[a-zA-Z0-9]*$/);

        if(regExp.test(passwordElement.value)) {
            this.createUser()
        }else{
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'The password must have lowercase, uppercase and numbers');
        }
    };

     createUser() {
        const formData = new FormData(this.signupFormElement);
        const username = formData.get('username');
        const password = formData.get('password')
         registerUser(username, password);
    };
};

//COmportamiento de nuestro formulario
/*
-El usuario y la password No pueden estar vacios
-La contraseña debe tener un minimo de caracteres
-La contraseña debe contener mayusculas minusculas y numeros

*/