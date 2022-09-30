import {AdsController} from './ads__list/AdsController.js'
import { NotificationController } from './notifications/NotificationController.js';
//Cuando el DOM este listo seleccionamos el nodo con el que vamos a trabajar
document.addEventListener('DOMContentLoaded', () => {
    const sectionElement = document.getElementById('ads__container');

    const notificationElement = document.getElementById('ads__not__found')
    //Le pasamos el nodo seleccionado al controlador y ejecutamos la función
    const adsController = new AdsController(sectionElement)
    const notificationController = new NotificationController(notificationElement)
});


