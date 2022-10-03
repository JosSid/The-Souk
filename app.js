import {AdsController} from './ads__list/AdsController.js'
import { NotificationController } from './notifications/NotificationController.js';
//Cuando el DOM este listo seleccionamos el nodo con el que vamos a trabajar
document.addEventListener('DOMContentLoaded', () => {
    const createController = () => {
        const sectionElement = document.getElementById('ads__container');
        const notificationElement = document.getElementById('ads__not__found');
        //Le pasamos el nodo seleccionado al controlador y ejecutamos la función
        const adsController = new AdsController(sectionElement);
        const notificationController = new NotificationController(notificationElement);
    };

    const loginUserState = () => {
        const token = localStorage.getItem('token');
        const userAction = document.getElementById('link__create__ad')
        if(!token){
            userAction.innerHTML = '<a href="/signup.html"><button>Login</button></a>'
        }else{
            userAction.innerHTML = '<a href="/createAd.html"><button>Create Advertisment</button></a>'
        }
    }

    createController();
    loginUserState();
});


